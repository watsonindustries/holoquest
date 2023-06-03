<script lang="ts">
	import { onMount } from 'svelte';
	import QrScanner from 'qr-scanner';

	const debug = true;

	let collectedStampsCount = 0;
	let availableCameras = [] as ArrayLike<QrScanner.Camera>;

	onMount(async () => {
		availableCameras = await QrScanner.listCameras(true);
		collectedStampsCount = localStorage.length;
	});
</script>

<div class="text-2xl text-center mx-4 space-y-8 my-4">
	<p>HoloQuest companion app</p>

	<p>
		Developed by <a href="https://watsonindustries.live" class="link link-primary"
			>Watson Industries</a
		>
	</p>

	<p>
		Contact <a href="https://twitter.com/DaniruKun" class="link link-secondary">@danirukun</a> about
		questions
	</p>

	{#if debug}
		<div class="divider" />
		<p class="text-primary font-bold">Debug mode is enabled</p>
		<p>Collected stamps: {collectedStampsCount}</p>
		<p>Available cameras:</p>
		<ul>
			{#each availableCameras as camera}
				<li class="font-mono text-base">{camera.label}</li>
			{/each}
		</ul>

		<button
			on:click={() => localStorage.clear()}
			class="btn btn-error rounded-full gap-2 w-6/12 mx-auto"
		>
			Delete all stamps</button
		>
	{/if}
</div>
