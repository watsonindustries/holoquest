<script lang="ts">
	import { fade } from 'svelte/transition';

	export let id: number;
	export let name: string;
	export let collected = false;

	const PLACEHOLDER_STAMP_IMG =
		'https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png';

	export let img = PLACEHOLDER_STAMP_IMG;
</script>

<div class="flex flex-col items-center" in:fade={{ duration: 200, delay: 150 * id + 1000 }}>
	<div class="flex h-28 w-28 items-center justify-center rounded-full bg-gray-200">
		<div class="flex h-24 w-24 items-center justify-center rounded-full bg-white">
			{#if collected}
				<img src={img} alt={name} class="h-16 w-16 rounded-full" />
			{:else}
				<span class="font-sans text-6xl font-semibold text-secondary">?</span>
			{/if}
		</div>
	</div>
	<div class="mt-2 text-center">{name}</div>
</div>
