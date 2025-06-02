<script lang="ts">
	import { onMount } from 'svelte';
	import QrScanner from 'qr-scanner';
	import { nickname } from '$lib/stores/userinfo';
	import { updateExpectedStamps } from '../../stamps';
	import { setToast } from '$lib/stores/toasts';
	import { TOAST_TYPE } from '../../custom';
	import { collectedStamps } from '$lib/stores/stamps';
	import { checkForUpdates } from '$lib/service-worker-registration';

	let availableCameras = $state([] as ArrayLike<QrScanner.Camera>);
	let sheetTorn = $state(false);

	onMount(async () => {
		availableCameras = await QrScanner.listCameras(true);
		sheetTorn = localStorage.getItem('isStampSheetTorn') === 'yes';
	});

	function handleCheckForUpdates() {
		checkForUpdates();
		setToast({ message: 'Checking for updates...', type: TOAST_TYPE.SUCCESS });
	}
</script>

<div class="mx-4 space-y-4">
	<p class="text-xl font-bold">Available cameras</p>
	<ul>
		{#each availableCameras as camera}
			<li class="font-mono text-base">{camera.label}</li>
		{/each}
	</ul>

	<button
		onclick={() => {
			localStorage.clear();
		}}
		class="btn-error btn mx-auto w-8/12 gap-2 rounded-full"
	>
		clear localstorage</button
	>

	<p class="text-xl font-bold">User info</p>
	<p>Nickname: <span class="font-mono">{$nickname}</span></p>

	<p class="text-xl font-bold">Stamps</p>
	<p>Stamp sheet status: {sheetTorn ? 'torn' : 'untorn'}</p>
	<button
		onclick={() => localStorage.setItem('isStampSheetTorn', 'no')}
		class="btn-primary btn mx-auto w-8/12 gap-2 rounded-full text-base-100">Untear sheet</button
	>
	<button
		class="btn-primary btn w-8/12 gap-2 rounded-full text-base-100"
		onclick={async () => {
			await updateExpectedStamps();
			setToast({ message: 'Stamp data refetched', type: TOAST_TYPE.SUCCESS });
		}}>Refetch stamp data</button
	>
	<button
		class="btn-error btn mx-auto w-8/12 gap-2 rounded-full"
		onclick={() => {
			collectedStamps.reset();
			setToast({ message: 'Collected stamps reset', type: TOAST_TYPE.SUCCESS });
		}}>Reset collected stamps</button
	>

	<p class="text-xl font-bold">App Updates</p>
	<button
		onclick={handleCheckForUpdates}
		class="btn-secondary btn mx-auto w-8/12 gap-2 rounded-full text-white"
	>
		Check for Updates
	</button>
</div>
