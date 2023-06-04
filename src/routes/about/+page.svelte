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

<div class="mx-4 my-4 space-y-8 text-center text-2xl">
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
		<p>Collected stamps: {collectedStampsCount}</p>
		<p>Available cameras:</p>
		<ul>
			{#each availableCameras as camera}
				<li class="font-mono text-base">{camera.label}</li>
			{/each}
		</ul>

		<button
			on:click={() => {
				localStorage.clear();
				collectedStampsCount = localStorage.length;
			}}
			class="btn-error btn mx-auto w-6/12 gap-2 rounded-full"
		>
			Delete all stamps</button
		>
	{/if}
</div>
