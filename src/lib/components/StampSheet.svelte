<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { QrCode } from '@steeze-ui/heroicons';
	import StampComponent from '$lib/components/Stamp.svelte';
	import type { Stamp } from '../../custom';
	import { onMount } from 'svelte';

	export let stamps: Stamp[] = [];

	let isStampCollected = function (_stamp: Stamp) {
		return false;
	};

	const delay = 500; // synchronized fade in delay

	onMount(() => {
		isStampCollected = function (stamp: Stamp) {
			return localStorage.getItem(stamp.hash) !== null;
		};
	});
</script>

<div class="divide-y-2 divide-dashed divide-slate-900">
	<!-- Stub -->
	<div
		class="mx-8 flex flex-col justify-center space-y-6 rounded-t-xl bg-slate-100 pb-8 pt-4 shadow-md"
		in:fade={{ delay }}>
		<h1 class="text-center font-geologica text-4xl font-bold text-primary">Stamps</h1>

		<a
			href="/scanner"
			class="btn-xl btn-info btn mx-auto w-6/12 justify-center gap-2 rounded-full font-bold text-base-100"
			tabindex="-1"
			aria-disabled="true">
			<Icon src={QrCode} theme="solid" class="h-8 w-8" />
			Scan stamp</a>
	</div>

	<!-- Stamp grid -->
	<div
		class="mx-8 grid grid-cols-2 gap-4 rounded-b-xl bg-slate-100 p-4 pt-8 shadow-md"
		in:fade={{ delay }}>
		{#each stamps as stamp}
			<StampComponent name={stamp.name} collected={isStampCollected(stamp)} id={stamp.id} />
		{/each}
	</div>
</div>
