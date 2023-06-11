<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import { nickname, scansChannel, setToast } from '../../store';

	import QrScanner from 'qr-scanner';

	import { sha1 } from '../../crypto';
	import { expectedStamps } from '../../const';
	import type { ScannerState } from '../../custom';

	import { Icon } from '@steeze-ui/svelte-icon';

	import { Eye, QrCode, StopCircle } from '@steeze-ui/heroicons';
	import { fade } from 'svelte/transition';

	let state: ScannerState = 'stopped';

	let videoElem: HTMLVideoElement;
	let qrScanner: QrScanner;
	let token = '';
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
			// Scan success
			localStorage.setItem(hash, token);
			$scansChannel?.push('collected', { nickname: $nickname });

			setToast({
				type: 'success',
				message: 'Stamp Saved!'
			});
		} else {
			setToast({
				type: 'error',
				message: 'Invalid Stamp!'
			});
		}
	}

	onMount(() => {
		videoElem = document.querySelector('video') as HTMLVideoElement;
		qrScanner = new QrScanner(videoElem, onResult, {
			highlightScanRegion: true,
			highlightCodeOutline: true
		});
	});

	onDestroy(() => {
		qrScanner?.destroy();
	});
</script>

<div class="space-y-4">
	<h1 class="text-center font-geologica text-4xl font-bold text-primary">Scanner</h1>
	<p class="px-2 text-center text-xl">Press Scan, and scan the QR code of the stamp!</p>

	<div class="flex flex-col justify-center space-y-4">
		<button
			on:click={transitionState}
			class="btn mx-auto w-10/12 max-w-screen-lg gap-2 rounded-full text-lg"
			class:btn-primary={state === 'stopped'}
			class:btn-error={state === 'scanning'}>
			<Icon
				src={state === 'scanning' ? StopCircle : QrCode}
				theme="solid"
				class="color-gray-900"
				size="32px" />
			{state === 'scanning' ? 'Stop' : 'Scan'}</button>
	</div>

	<div id="scanner-preview-area" class="h-96" class:hidden={state === 'stopped'} transition:fade>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video />
	</div>

	<div class="flex flex-col justify-center space-y-4">
		<a
			class="btn-secondary btn mx-auto mt-2 w-10/12 max-w-screen-lg gap-2 rounded-full text-lg"
			href="/">
			<Icon src={Eye} theme="solid" class="color-gray-900" size="28px" />
			View collected stamps</a>
	</div>
</div>
