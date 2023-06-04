<script lang="ts">
	import StampComponent from '$lib/components/Stamp.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { expectedStamps } from '../const';
	import type { Stamp } from '../custom';

	import { Icon } from '@steeze-ui/svelte-icon';

	import { QrCode } from '@steeze-ui/heroicons';
	import QuestCompletionButton from '$lib/components/QuestCompletionButton.svelte';

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

<div class="flex flex-col justify-center space-y-6" in:fade={{ delay: 1000 }}>
	<h1 class="text-center font-geologica text-4xl font-bold text-primary">Stamps</h1>

	<a
		href="/scanner"
		class="btn-xl btn-info btn mx-auto w-6/12 justify-center gap-2 rounded-full font-bold text-base-100"
		tabindex="-1"
		aria-disabled="true"
	>
		<Icon src={QrCode} theme="solid" class="h-8 w-8" />
		Scan stamp</a
	>
</div>

<div class="divider mx-auto w-10/12" in:fade={{ delay: 1000 }} />

<div class="grid grid-cols-2 gap-4 bg-base-100 p-4">
	{#each expectedStamps as stamp}
		<StampComponent {...stamp} collected={isStampCollected(stamp)} id={stamp.id} />
	{/each}
</div>

<div class="divider mx-auto w-10/12" />

<QuestCompletionButton active={isQuestCompleted} />
