<script lang="ts">
	import { fade } from 'svelte/transition';
	import {CheckBadge} from '@steeze-ui/heroicons'
	import { Icon } from '@steeze-ui/svelte-icon';

	export let id: number;
	export let name: string;
	export let collected = false;

	const PLACEHOLDER_STAMP_IMG =
		'https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png';

	export let img = PLACEHOLDER_STAMP_IMG;
</script>

<div class="flex flex-col items-center" in:fade={{ duration: 200, delay: 150 * id + 500 }}>
	<div class="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
		<div class="flex h-24 w-24 items-center justify-center rounded-full bg-white">
			{#if collected}
				<!-- <img src={img} alt={name} class="h-16 w-16 rounded-full" /> -->
				<Icon src={CheckBadge} class="rounded-full stroke-secondary" size="64" />
			{:else}
				<span class="font-sans text-6xl font-semibold text-secondary">?</span>
			{/if}
		</div>
	</div>
	<div class="mt-2 text-center">{name}</div>
</div>
