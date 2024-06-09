<script lang="ts">
	import { onMount } from 'svelte';
	import QrScanner from 'qr-scanner';
	import { nickname, userToken } from '../../store';
	let availableCameras = [] as ArrayLike<QrScanner.Camera>;
	let sheetTorn = false;

	onMount(async () => {
		availableCameras = await QrScanner.listCameras(true);
		sheetTorn = localStorage.getItem('isStampSheetTorn') === 'yes';
	});
</script>

<div class="mx-4 space-y-4">
	<p class="text-xl font-bold">Available cameras</p>
	<ul>
		{#each availableCameras as camera}
			<li class="font-mono text-base">{camera.label}</li>
		{/each}
	</ul>

	<button
		on:click={() => {
			localStorage.clear();
		}}
		class="btn-error btn mx-auto w-8/12 gap-2 rounded-full"
	>
		clear localstorage</button
	>

	<p class="text-xl font-bold">User info</p>
	<p>Nickname: <span class="font-mono">{$nickname}</span></p>
	<p>Device ID: <span class="font-mono">{$userToken}</span></p>

	<p class="text-xl font-bold">Stamps</p>
	<p>Stamp sheet status: {sheetTorn ? 'torn' : 'untorn'}</p>
	<button
		on:click={() => localStorage.setItem('isStampSheetTorn', 'no')}
		class="btn-primary btn mx-auto w-8/12 gap-2 rounded-full">Untear sheet</button
	>
</div>
