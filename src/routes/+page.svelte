<script lang="ts">
	import StampComponent from '$lib/components/Stamp.svelte';
	import { onMount } from 'svelte';
	import { expectedStamps } from '../const';
	import type { Stamp } from '../custom';

	import { Icon } from '@steeze-ui/svelte-icon';

	import { CheckCircle } from '@steeze-ui/heroicons';

	let isQuestCompleted = false;

	let isStampCollected = function (_stamp: Stamp) {
		return false;
	};

	function isAllStampsCollected() {
		return expectedStamps.every(isStampCollected);
	}

	onMount(() => {
		isStampCollected = function (stamp: Stamp) {
			return localStorage.getItem(stamp.hash) !== null;
		};

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

<div class="flex justify-center mb-4">
	<a
		href="/result"
		class="btn btn-success btn-xl gap-2 rounded-full"
		class:btn-disabled={!isQuestCompleted}
		tabindex="-1"
		aria-disabled="true"
	>
		<Icon src={CheckCircle} theme="solid" class="color-gray-900 h-8 w-8" />
		{isQuestCompleted ? 'Complete quest' : 'Collect more stamps'}</a
	>
</div>
