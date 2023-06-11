<script lang="ts">	
	import { onMount } from 'svelte';
	import { expectedStamps } from '../const';
	import type { Stamp } from '../custom';

	import QuestCompletionButton from '$lib/components/QuestCompletionButton.svelte';
	import StampSheet from '$lib/components/StampSheet.svelte';

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

<StampSheet stamps={expectedStamps} />

<div class="divider mx-auto w-10/12" />

<QuestCompletionButton active={isQuestCompleted} />
