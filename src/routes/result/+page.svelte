<script lang="ts">
	import { onMount } from 'svelte';

	import QRCode from 'qrcode';
	import { expectedStamps } from '../../const';
	import { calculateTokenChecksum } from '../../crypto';

	let checkSum = '';

	onMount(() => {
		let tokens = expectedStamps
			.map((stamp) => stamp.hash)
			?.map((hash) => localStorage.getItem(hash)) as string[];
		checkSum = calculateTokenChecksum(tokens);

		console.log('checksum:', checkSum);

		let canvas = document.getElementById('canvas') as HTMLCanvasElement;
		let size = Math.floor(window.innerWidth * 0.9);
		canvas.width = size;
		canvas.height = size;
		QRCode.toCanvas(canvas, checkSum, { width: size }, function (error) {
			if (error) console.error(error);
		});
	});
</script>

<h1 class="text-4xl font-bold text-center text-primary font-geologica">Reward Collection</h1>

<div class="flex flex-col justify-center">
	<canvas id="canvas" class="mx-auto my-4" />
	<div class="max-w-xs font-mono text-center break-words mx-auto">{checkSum}</div>
</div>

<div class="divider w-10/12 mx-auto" />

<p class="text-xl max-w-xs mx-auto text-center text-secondary font-semibold">
	Show this code to staff for validation to get your prize!
</p>
