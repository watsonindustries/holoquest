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

<h1 class="text-center font-geologica text-4xl font-bold text-primary">Reward Collection</h1>

<div class="flex flex-col justify-center">
	<canvas id="canvas" class="mx-auto my-4" />
	<div class="mx-auto max-w-xs break-words text-center font-mono">{checkSum}</div>
</div>

<div class="divider mx-auto w-10/12" />

<p class="mx-auto max-w-xs text-center text-xl font-semibold text-secondary">
	Show this code to staff for validation to get your prize!
</p>
