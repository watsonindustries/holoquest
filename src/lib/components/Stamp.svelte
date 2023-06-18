<script lang="ts">
	import { fade } from 'svelte/transition';

	export let id: number;
	export let name: string;
	export let collected = false;
	export let navURL = `/partner/${id}`;

	const PLACEHOLDER_STAMP_IMG =
		'https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png';

	export let img = PLACEHOLDER_STAMP_IMG;
</script>

<a href={navURL}>
	<div class="flex flex-col items-center" in:fade={{ duration: 200, delay: 150 * id + 500 }}>
		<div
			class="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary"
			class:opacity-30={!collected}>
			<div class="flex h-24 w-24 items-center justify-center rounded-full bg-white">
				<img src={img} alt={name} class="h-20 w-20 rounded-full" />
			</div>
		</div>
		<div class="mt-2 text-center">{name}</div>
	</div>
</a>
