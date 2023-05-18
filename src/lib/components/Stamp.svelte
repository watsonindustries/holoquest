<script lang="ts">
	export let id: number;
	export let subtitle: string;
	
	const PLACEHOLDER_STAMP_IMG =
	'https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png';

	export let img = PLACEHOLDER_STAMP_IMG;
</script>

<div class="flex flex-col items-center">
	<div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
		<div class="w-20 h-20 bg-white rounded-full flex items-center justify-center">
			<img src={img} alt={subtitle} class="w-16 h-16 rounded-full" />
		</div>
	</div>
	<div class="mt-2 text-center">{subtitle}</div>
</div>
