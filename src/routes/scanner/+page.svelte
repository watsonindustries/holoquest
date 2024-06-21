<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import QrScanner from 'qr-scanner';

	import { sha256 } from '../../crypto';
	import { TOAST_TYPE, SCANNER_STATE, type ScannerState } from '../../custom';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Ticket, QrCode, StopCircle } from '@steeze-ui/heroicons';
	import { fade } from 'svelte/transition';
	import { get } from 'svelte/store';
	import { expectedStamps } from '$lib/stores/stamps';
	import { setToast } from '$lib/stores/toasts';

	let state: ScannerState = 'STOPPED';

	let videoElem: HTMLVideoElement;
	let qrScanner: QrScanner;
	let token = '';
	const expectedHashes = Object.values(get(expectedStamps)).map((stamp) => stamp.hash);

	let collectedStampCount = function () {
		return 0;
	};

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

	function onResult(result: QrScanner.ScanResult) {
		token = result.data;
		transitionState();
		let hash = sha256(token);

		if (expectedHashes.includes(hash)) {
			// Scan success
			localStorage.setItem(hash, token);

			let collectedStamps = collectedStampCount();

			setToast({
				type: TOAST_TYPE.SUCCESS,
				message: 'Stamp Saved!'
			});

			if (collectedStamps == 10) {
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

	onMount(() => {
		videoElem = document.querySelector('video') as HTMLVideoElement;
		qrScanner = new QrScanner(videoElem, onResult, {
			highlightScanRegion: true,
			highlightCodeOutline: true
		});

		videoElem.setAttribute('playsinline', 'true');
		videoElem.setAttribute('autoplay', 'true');
		videoElem.setAttribute('muted', 'true');

		collectedStampCount = () => {
			return Object.keys(localStorage).filter((key) => expectedHashes.includes(key)).length;
		};
	});

	onDestroy(() => {
		console.log('Destroying Scanner');
		qrScanner?.destroy();
	});
</script>

<div class="space-y-4" in:fade|global={{ delay: 500 }}>
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
		transition:fade|global
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
