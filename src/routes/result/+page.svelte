<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	import QRCode from 'qrcode';
	import { expectedStamps } from '../../const';
	import { get } from '../../storage';
	import { calculateTokenChecksum } from '../../crypto';

	let tokens = expectedStamps.map((stamp) => stamp.hash)?.map((hash) => get(hash)) as string[];
	let checkSum = calculateTokenChecksum(tokens);

	console.log('checksum:', checkSum);

	onMount(() => {
		let canvas = document.getElementById('canvas') as HTMLCanvasElement;
		let size = Math.floor(window.innerWidth * 0.9);
		canvas.width = size;
		canvas.height = size;
		QRCode.toCanvas(canvas, checkSum, { width: size }, function (error) {
			if (error) console.error(error);
		});
	});

	export let data: PageData;
</script>

<h1 class="text-4xl font-bold text-center text-primary">Reward Collection</h1>

<div class="flex flex-col justify-center">
	<canvas id="canvas" class="mx-auto" />
	<div class="max-w-xs font-mono text-center break-words mx-auto">{checkSum}</div>
</div>

<div class="divider w-10/12 mx-auto" />

<p class="text-xl max-w-xs mx-auto text-center text-secondary font-semibold">
	Show this code to staff for validation to get your prize!
</p>
