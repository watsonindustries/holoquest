<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import QrScanner from 'qr-scanner';

	import { tokenHash } from '../../crypto';
	import { TOAST_TYPE, SCANNER_STATE, type ScannerState } from '../../custom';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Ticket, QrCode, StopCircle } from '@steeze-ui/heroicons';
	import { getCollectedCount, getExpectedStampHashes, saveStamp } from '$lib/stores/stamps';
	import { setToast } from '$lib/stores/toasts';
	import { minStampCountRequired } from '../../const';

	let state: ScannerState = 'STOPPED';

	let videoElem: HTMLVideoElement;
	let qrScanner: QrScanner;

	function transitionState() {
		if (state === SCANNER_STATE.SCANNING) {
			state = SCANNER_STATE.STOPPED;
			qrScanner.pause();
		} else if (state === SCANNER_STATE.STOPPED) {
			state = SCANNER_STATE.SCANNING;
			qrScanner.start().catch((e) => {
				console.error(e);
				setToast({
					type: TOAST_TYPE.ERROR,
					message: 'Failed to start scanner!'
				});
			});
		}
	}

	// Handle scan result
	function onResult(result: QrScanner.ScanResult) {
		let token = '';
		try {
			token = parseTokenFromScan(result.data);
			console.log('Scanned token:', token);
		} catch (e) {
			setToast({
				type: TOAST_TYPE.ERROR,
				message: 'Invalid QR code!'
			});
			return;
		}

		transitionState();
		let hash = tokenHash(token);

		if (getExpectedStampHashes().includes(hash)) {
			// Scan success
			saveStamp(token);

			setToast({
				type: TOAST_TYPE.SUCCESS,
				message: 'Stamp Saved!'
			});

			if (getCollectedCount() >= minStampCountRequired) {
				setTimeout(() => {
					setToast({
						type: TOAST_TYPE.SUCCESS,
						message: 'Stamp Rally completed!'
					});
				}, 1000);
			}
		} else {
			setToast({
				type: TOAST_TYPE.ERROR,
				message: 'Invalid Stamp!'
			});
		}
	}

	function parseTokenFromScan(data: string): string {
		const url = new URL(data);
		if (url.pathname.startsWith('/sc/')) {
			const token = url.pathname.substring(4);
			return token;
		} else {
			throw new Error('Invalid QR code');
		}
	}

	onMount(() => {
		videoElem = document.querySelector('video') as HTMLVideoElement;
		qrScanner = new QrScanner(videoElem, onResult, {
			highlightScanRegion: true,
			highlightCodeOutline: true
		});

		videoElem.setAttribute('playsinline', 'true');
		videoElem.setAttribute('autoplay', 'true');
		videoElem.setAttribute('muted', 'true');
	});

	onDestroy(() => {
		console.log('Destroying Scanner');
		qrScanner?.destroy();
	});
</script>

<div class="space-y-4">
	<h1 class="text-center font-geologica text-4xl font-bold text-primary">Scanner</h1>
	<p class="px-2 text-center text-xl">Press Scan, and scan the QR code of the stamp!</p>

	<div class="flex flex-col justify-center space-y-4">
		<button
			on:click={transitionState}
			class="text btn mx-auto w-10/12 max-w-screen-lg gap-2 rounded-full text-white"
			class:btn-primary={state === SCANNER_STATE.STOPPED}
			class:btn-error={state === SCANNER_STATE.SCANNING}
		>
			<Icon
				src={state === SCANNER_STATE.SCANNING ? StopCircle : QrCode}
				theme="solid"
				class="color-gray-900"
				size="32px"
			/>
			{state === SCANNER_STATE.SCANNING ? 'Stop' : 'Scan'}</button
		>
	</div>

	<div
		id="scanner-preview-area"
		class="h-96"
		class:hidden={state === SCANNER_STATE.STOPPED}
	>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video />
	</div>

	<div class="flex flex-col justify-center space-y-4">
		<a
			class="text btn-secondary btn mx-auto mt-2 w-10/12 max-w-screen-lg gap-2 rounded-full text-white"
			href="/"
		>
			<Icon src={Ticket} theme="solid" class="color-gray-900" size="28px" />
			View collected stamps</a
		>
	</div>
</div>
