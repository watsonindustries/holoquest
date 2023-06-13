<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { QrCode } from '@steeze-ui/heroicons';
	import StampComponent from '$lib/components/Stamp.svelte';
	import type { Stamp } from '../../custom';
	import { onMount } from 'svelte';
	import { expectedStamps } from '../../const';

	export let stamps: Stamp[] = [];

	let isStampCollected = function (_stamp: Stamp) {
		return false;
	};

	let tearStampSheet = function (): void {};

	let isStampSheetTorn = false; // Can only be true if the quest was completed
	let isQuestCompleted = false; // Can only be true if all stamps were collected

	function isAllStampsCollected() {
		return expectedStamps.every(isStampCollected);
	}

	const delay = 500; // synchronized fade in delay
	const minTouchTime = 1500; // minimum touch time in milliseconds, how long the stub of the stamp sheet should be touched

	onMount(() => {
		isStampCollected = function (stamp: Stamp) {
			return localStorage.getItem(stamp.hash) !== null;
		};

		tearStampSheet = function () {
			localStorage.setItem('isStampSheetTorn', 'yes');
			isStampSheetTorn = true;
		};

		if (isAllStampsCollected()) {
			console.log('All stamps collected!');
			isQuestCompleted = true;
		}

		if (localStorage.getItem('isStampSheetTorn') === 'yes') {
			isStampSheetTorn = true;
		}
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

<div class="my-2 divide-y-2 divide-dashed divide-slate-900" out:fade>
	<!-- Stub -->
	<div
		class="mx-8 flex flex-col justify-center space-y-6 rounded-t-xl bg-slate-100 pb-8 pt-4 shadow-md"
		class:animate-pulse={isTouching && isQuestCompleted}
		class:border-b-2={isStampSheetTorn}
		class:border-dashed={isStampSheetTorn}
		class:border-slate-900={isStampSheetTorn}
		in:fade={{ delay }}
		on:touchstart={handleTouchStart}
		on:touchend={handleTouchEnd}
		on:touchcancel={handleTouchCancel}>
		<h1 class="text-center font-geologica text-4xl font-bold text-primary">Stamps</h1>

		{#if isQuestCompleted}
			<h2 class="text-center font-geologica text-xl font-semibold text-secondary">
				{#if isStampSheetTorn}
					Thank you for participating!
				{:else}
					Show sheet to staff!
				{/if}
			</h2>
		{:else}
		<!-- Scan button -->
			<a
				href="/scanner"
				class="btn-xl btn-info btn mx-auto w-8/12 justify-center gap-2 rounded-full font-bold text-base-100"
				tabindex="-1"
				aria-disabled="true">
				<Icon src={QrCode} theme="solid" class="h-8 w-8" />
				Scan stamp
			</a>
		{/if}
	</div>

	<!-- Stamp grid -->
	{#if !isStampSheetTorn}
		<div
			class="mx-8 grid grid-cols-2 gap-4 rounded-b-xl bg-slate-100 p-4 pt-8 shadow-md"
			in:fade={{ delay }}
			out:fly={isStampSheetTorn && isQuestCompleted
				? { y: 20, duration: 1200, easing: cubicOut }
				: { opacity: 100 }}>
			{#each stamps as stamp}
				<StampComponent name={stamp.name} collected={isStampCollected(stamp)} id={stamp.id} />
			{/each}
		</div>
	{/if}
</div>
