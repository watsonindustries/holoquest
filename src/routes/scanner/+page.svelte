<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import { nickname, notificationsChannel, setToast, userToken } from '../../store';

	import QrScanner from 'qr-scanner';

	import { sha1 } from '../../crypto';
	import { expectedStamps } from '../../const';
	import { ToastType, ScannerState } from '../../custom';

	import { Icon } from '@steeze-ui/svelte-icon';

	import { Eye, QrCode, StopCircle } from '@steeze-ui/heroicons';
	import { fade } from 'svelte/transition';
	import { updateScore } from '../../client';

	let state = ScannerState.STOPPED;

	let videoElem: HTMLVideoElement;
	let qrScanner: QrScanner;
	let token = '';
	const expectedHashes = expectedStamps.map((stamp) => stamp.hash);

	let collectedStampCount = function () {
		return 0;
	};

	function transitionState() {
		if (state === ScannerState.SCANNING) {
			state = ScannerState.STOPPED;
			qrScanner.pause();
		} else if (state === ScannerState.STOPPED) {
			state = ScannerState.SCANNING;
			qrScanner.start().catch((e) => {
				console.error(e);
				setToast({
					type: ToastType.ERROR,
					message: 'Failed to start scanner!'
				});
			});
		}
	}

	function onResult(result: QrScanner.ScanResult) {
		token = result.data;
		transitionState();
		let hash = sha1(token);

		if (expectedHashes.includes(hash)) {
			// Scan success
			localStorage.setItem(hash, token);
			$notificationsChannel?.push('collected', { nickname: $nickname });

			let collectedStamps = collectedStampCount();

			try {
				if ($userToken) updateScore($userToken, collectedStamps);
			} catch (e) {
				console.error("Can't update score!");
			}

			setToast({
				type: ToastType.SUCCESS,
				message: 'Stamp Saved!'
			});

			if (collectedStamps == 10) {
				setTimeout(() => {
					setToast({
						type: ToastType.SUCCESS,
						message: 'Stamp Rally completed!'
					});
					$notificationsChannel?.push('rally-completed', { nickname: $nickname });
				}, 1000);
			}
		} else {
			setToast({
				type: ToastType.ERROR,
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

<div class="space-y-4" in:fade={{ delay: 500 }}>
	<h1 class="text-center font-geologica text-4xl font-bold text-primary">Scanner</h1>
	<p class="px-2 text-center text-xl">Press Scan, and scan the QR code of the stamp!</p>

	<div class="flex flex-col justify-center space-y-4">
		<button
			on:click={transitionState}
			class="text btn mx-auto w-10/12 max-w-screen-lg gap-2 rounded-full"
			class:btn-primary={state === ScannerState.STOPPED}
			class:btn-error={state === ScannerState.SCANNING}>
			<Icon
				src={state === ScannerState.SCANNING ? StopCircle : QrCode}
				theme="solid"
				class="color-gray-900"
				size="32px" />
			{state === ScannerState.SCANNING ? 'Stop' : 'Scan'}</button>
	</div>

	<div
		id="scanner-preview-area"
		class="h-96"
		class:hidden={state === ScannerState.STOPPED}
		transition:fade>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video />
	</div>

	<div class="flex flex-col justify-center space-y-4">
		<a
			class="text btn-secondary btn mx-auto mt-2 w-10/12 max-w-screen-lg gap-2 rounded-full"
			href="/">
			<Icon src={Eye} theme="solid" class="color-gray-900" size="28px" />
			View collected stamps</a>
	</div>
</div>
