<script lang="ts">
	import { onMount } from 'svelte';

	import QrScanner from 'qr-scanner';

	import { sha1 } from '../../crypto';
	import { expectedStamps } from '../../const';
	import ToastComponent from '$lib/components/Toast.svelte';
	import type { Toast } from '../../custom';

	import { Icon } from '@steeze-ui/svelte-icon';

	import { QrCode, StopCircle } from '@steeze-ui/heroicons';

	let videoElem: HTMLVideoElement;
	let qrScanner: QrScanner;
	let token = '';
	let toasts: ArrayLike<Toast> = [];
	const expectedHashes = expectedStamps.map((stamp) => stamp.hash);

	function onResult(result: QrScanner.ScanResult) {
		token = result.data;
		qrScanner.pause();
		let hash = sha1(token);

		if (expectedHashes.includes(hash)) {
			localStorage.setItem(hash, token);
			toasts = [
				{
					type: 'success',
					message: 'Stamp Saved!'
				}
			];
		} else {
			toasts = [
				{
					type: 'error',
					message: 'Invalid Stamp!'
				}
			];
		}

		setTimeout(() => {
			toasts = [];
		}, 4000);
	}

	onMount(() => {
		videoElem = document.querySelector('video') as HTMLVideoElement;
		qrScanner = new QrScanner(videoElem, onResult, {
			highlightScanRegion: true,
			highlightCodeOutline: true
		});
	});
</script>

<div class="toast toast-bottom toast-center">
	{#each toasts as toast}
		<ToastComponent {...toast} />
	{/each}
</div>

<div class="space-y-4">
	<h1 class="text-4xl text-center text-primary font-bold">Scanner</h1>
	<p class="text-xl text-center px-2">Press Scan, and scan the QR code of the stamp!</p>

	<div class="flex flex-col space-y-4 justify-center">
		<button
			on:click={() => qrScanner.start()}
			class="btn btn-primary rounded-full gap-2 w-6/12 mx-auto"
		>
			<Icon src={QrCode} theme="solid" class="color-gray-900 h-8 w-8" />
			Scan</button
		>
		<button
			on:click={() => qrScanner.pause()}
			class="btn btn-error rounded-full gap-2 w-6/12 mx-auto"
		>
			<Icon src={StopCircle} theme="solid" class="color-gray-900 h-8 w-8" />
			Stop</button
		>
	</div>

	<div id="scanner-preview-area" class="min-h-screen bg-slate-800">
		<!-- svelte-ignore a11y-media-has-caption -->
		<video />
	</div>
</div>
