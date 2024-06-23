<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import QrScanner from 'qr-scanner';

	import { tokenHash } from '../../crypto';
	import { TOAST_TYPE, SCANNER_STATE, type ScannerState } from '../../custom';

	import { getCollectedCount, getExpectedStampHashes, saveStamp } from '$lib/stores/stamps';
	import { setToast } from '$lib/stores/toasts';
	import { minStampCountRequired } from '../../const';
	import { goto } from '$app/navigation';

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
		goto('/');
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

		transitionState();
	});

	onDestroy(() => {
		console.log('Destroying Scanner');
		qrScanner?.destroy();
	});
</script>

<div class="space-y-4">
	<h1 class="text-center font-geologica text-4xl font-bold text-primary">Scanner</h1>
	<p class="px-2 text-center text-xl">Press Scan, and scan the QR code of the stamp!</p>

	<div
		id="scanner-preview-area"
		class="h-96"
		class:hidden={state === SCANNER_STATE.STOPPED}
	>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video />
	</div>
</div>
