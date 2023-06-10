<script lang="ts">
	import { onMount } from 'svelte';
	import QrScanner from 'qr-scanner';
	import { nickname, userToken } from '../../store';

	const debug = true; // TODO: Set `false` as default, enabled in configured in localStorage

	let availableCameras = [] as ArrayLike<QrScanner.Camera>;

	onMount(async () => {
		availableCameras = await QrScanner.listCameras(true);
	});
</script>

<div class="mx-4 my-4 space-y-4 text-lg">
	<p>HoloQuest companion app</p>

	<p>
		Developed by <a href="https://watsonindustries.live" class="link-primary link"
			>Watson Industries</a
		>
	</p>

	<p>
		Contact <a href="https://twitter.com/DaniruKun" class="link-secondary link">@danirukun</a> about
		questions
	</p>

	{#if debug}
		<div class="divider" />
		<p class="font-bold text-primary">Debug mode is enabled</p>
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
	{/if}
</div>
