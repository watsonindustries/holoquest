<script lang="ts">
	import StampComponent from '$lib/components/Stamp.svelte';
	import { onMount } from 'svelte';
	import { expectedStamps } from '../const';
	import type { Stamp } from '../custom';
	import { get } from '../storage';

	let isQuestCompleted = false;

	function isStampCollected(stamp: Stamp) {
		return get(stamp.hash) !== null;
	}

	function isAllStampsCollected() {
		return expectedStamps.every(isStampCollected);
	}

	onMount(() => {
		if (isAllStampsCollected()) {
			console.log('All stamps collected!');
			isQuestCompleted = true;
		}
	});
</script>

<h1 class="text-4xl font-bold text-center text-primary">Stamps</h1>

<div class="divider w-10/12 mx-auto" />

<div class="grid grid-cols-2 gap-4 p-4 bg-base-100">
	{#each expectedStamps as stamp}
		<StampComponent {...stamp} collected={isStampCollected(stamp)} />
	{/each}
</div>

<div class="divider w-10/12 mx-auto" />

<div class="flex justify-center">
	<a
    href="/result"
		class="btn btn-success btn-xl"
		class:btn-disabled={!isQuestCompleted}
		tabindex="-1"
		aria-disabled="true">{isQuestCompleted ? 'Complete quest' : 'Collect more stamps'}</a
	>
</div>
