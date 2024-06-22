<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import StampComponent from '$lib/components/Stamp.svelte';
	import type { Tables } from '$lib/database.types';
	import { onMount } from 'svelte';

	import HolomemGacha from './HolomemGacha.svelte';
	import RoundScanButton from './RoundScanButton.svelte';
	import { collectedStamps } from '$lib/stores/stamps';
	import { get } from 'svelte/store';
	import { tokenHash } from '../../crypto';

	export let stamps: Tables<'stamps'>[] = [];

	let isStampCollected = function (_stamp: Tables<'stamps'>) {
		return false;
	};

	let tearStampSheet = function (): void {};

	let isStampSheetTorn = true; // Can only be true if the quest was completed
	let isQuestCompleted = false; // Can only be true if all stamps were collected

	function isAllStampsCollected() {
		// TODO: Support minimum collected stamps required
		return stamps.every(isStampCollected);
	}

	const delay = 500; // synchronized fade in delay
	const minTouchTime = 1000; // minimum touch time in milliseconds, how long the stub of the stamp sheet should be touched

	onMount(() => {
		isStampCollected = function (stamp: Tables<'stamps'>): boolean {
			const collectedStampsObj = get(collectedStamps) as { [key: string]: boolean };
			const stampHash = tokenHash(stamp.id);
			return collectedStampsObj?.[stampHash];
		};

		tearStampSheet = function () {
			localStorage.setItem('isStampSheetTorn', 'yes');
			isStampSheetTorn = true;
		};

		if (isAllStampsCollected()) {
			console.log('All stamps collected!');
			isQuestCompleted = true;
		}

		isStampSheetTorn = localStorage.getItem('isStampSheetTorn') === 'yes';
	});

	let touchStartTime: number;
	let touchEndTime: number;
	let touchCount: number;
	let isTouching = false;
	let timeoutId: any;

	function handleTouchStart(event: TouchEvent) {
		if (event.touches.length === 2 && isQuestCompleted) {
			touchStartTime = new Date().getTime();
			touchCount = event.touches.length;
			isTouching = true;

			timeoutId = setTimeout(() => {
				tearStampSheet();
			}, 2000);
		}
	}

	function handleTouchEnd(_event: TouchEvent) {
		if (touchCount === 2) {
			touchEndTime = new Date().getTime();
			if (touchEndTime - touchStartTime >= minTouchTime) {
				console.log('Two-finger tap for at least 2 seconds detected!');
			}
		}
		isTouching = false;
		clearTimeout(timeoutId);
	}

	function handleTouchCancel() {
		touchCount = 0;
		isTouching = false;
		clearTimeout(timeoutId);
	}
</script>

<!-- MARK: Component body -->
<div
	class="mx-8 my-4 mb-8 divide-y-2 divide-dashed divide-slate-900 rounded-xl bg-slate-100"
	out:fade|global
>
	<!-- Stub -->
	<div
		class="flex flex-col justify-center space-y-6 pb-8 pt-4 shadow-md"
		class:animate-pulse={isTouching && isQuestCompleted}
		class:border-b-2={isStampSheetTorn}
		class:border-dashed={isStampSheetTorn}
		class:border-slate-900={isStampSheetTorn}
		in:fade|global={{ delay }}
		on:touchstart={handleTouchStart}
		on:touchend={handleTouchEnd}
		on:touchcancel={handleTouchCancel}
	>
		<h1 class="text-center font-geologica text-4xl font-bold text-primary">Stamps</h1>

		{#if isQuestCompleted}
			<h2 class="text-center font-geologica text-xl font-semibold text-secondary">
				Show sheet to staff at the booth!
			</h2>
		{:else}
			<RoundScanButton />
		{/if}
	</div>

	<!-- Stamp grid, only rendered when the stamp sheet is not torn -->
	{#if !isStampSheetTorn}
		<div
			class="z-30 grid grid-cols-2 gap-4 rounded-b-xl p-4 pt-8 shadow-md"
			in:fade|global={{ delay }}
			out:fly|global={isStampSheetTorn && isQuestCompleted
				? { y: 20, duration: 1200, easing: cubicOut }
				: {}}
		>
			{#each stamps as stamp, i}
				<StampComponent
					name={stamp.name}
					collected={isStampCollected(stamp)}
					id={i}
					img={stamp.image_url || undefined}
				/>
			{/each}
		</div>
	{/if}
</div>

{#if isStampSheetTorn}
	<div class="my-auto mt-4 flex flex-col items-center justify-end space-y-4">
		<HolomemGacha />
	</div>
{/if}
