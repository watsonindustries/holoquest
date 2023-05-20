<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	import QrScanner from 'qr-scanner';

	import { set } from '../../storage';
	import { sha1 } from '../../crypto';
	import ToastComponent from '$lib/components/Toast.svelte';
	import type { Toast } from '../../custom';

	let videoElem: HTMLVideoElement;
	let qrScanner: QrScanner;
	let token = '';
	let toasts: ArrayLike<Toast> = [];

	function onResult(result: QrScanner.ScanResult) {
		token = result.data;
    qrScanner.pause();
		console.log('Detected token:', token);
		let hash = sha1(token);
		set(hash, token);
		console.log('Saved token under hash:', hash);
		toasts = [
			{
				type: 'success',
				message: 'Stamp Saved!'
			}
		];
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

	export let data: PageData;
</script>

<div class="toast toast-bottom toast-center">
	{#each toasts as toast}
		<ToastComponent {...toast}></ToastComponent>
	{/each}
</div>

<div class="space-y-4">
	<h1 class="text-4xl text-center text-primary font-bold">Scanner</h1>
	<p class="text-xl text-center px-2">Press Start, and scan the QR code of the stamp!</p>

	<div class="flex flex-col space-y-4 mx-6">
		<button on:click={() => qrScanner.start()} class="btn btn-primary">Start</button>
		<button on:click={() => qrScanner.pause()} class="btn btn-error">Stop</button>
	</div>

	<div id="scanner-preview-area" class="min-h-screen bg-slate-800">
		<!-- svelte-ignore a11y-media-has-caption -->
		<video />
	</div>
</div>
