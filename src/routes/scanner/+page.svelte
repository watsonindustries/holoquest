<script lang="ts">
	import { onMount } from 'svelte';

	import QrScanner from 'qr-scanner';

	import { sha1 } from '../../crypto';
	import { expectedStamps } from '../../const';
	import ToastComponent from '$lib/components/Toast.svelte';
	import type { ScannerState, Toast } from '../../custom';

	import { Icon } from '@steeze-ui/svelte-icon';

	import { Eye, QrCode, StopCircle } from '@steeze-ui/heroicons';

	let state: ScannerState = 'stopped';

	let videoElem: HTMLVideoElement;
	let qrScanner: QrScanner;
	let token = '';
	let toasts: ArrayLike<Toast> = [];
	const expectedHashes = expectedStamps.map((stamp) => stamp.hash);

	function transitionState() {
		if (state === 'scanning') {
			state = 'stopped';
			qrScanner.pause();
		} else if (state === 'stopped') {
			state = 'scanning';
			qrScanner.start();
		}
	}

	function onResult(result: QrScanner.ScanResult) {
		token = result.data;
		transitionState();
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
	<h1 class="text-4xl text-center text-primary font-bold font-geologica">Scanner</h1>
	<p class="text-xl text-center px-2">Press Scan, and scan the QR code of the stamp!</p>

	<div class="flex flex-col space-y-4 justify-center">
		<button
			on:click={transitionState}
			class="btn rounded-full gap-2 w-6/12 mx-auto text-xl"
			class:btn-primary={state === 'stopped'}
			class:btn-error={state === 'scanning'}
		>
			<Icon
				src={state === 'scanning' ? StopCircle : QrCode}
				theme="solid"
				class="color-gray-900"
				size="32px"
			/>
			{state === 'scanning' ? 'Stop' : 'Scan'}</button
		>
	</div>

	<div id="scanner-preview-area" class="h-96 bg-slate-800" class:hidden={state === 'stopped'}>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video />
	</div>

	<div class="flex flex-col space-y-4 justify-center">
		<a class="btn btn-secondary rounded-full gap-2 mx-auto text-lg mt-2" href="/">
			<Icon src={Eye} theme="solid" class="color-gray-900" size="28px" />
			View collected stamps</a
		>
	</div>
</div>
