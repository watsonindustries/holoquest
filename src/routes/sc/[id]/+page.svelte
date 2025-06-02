<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { tokenHash } from '../../../crypto';
	import { getExpectedStampHashes, saveStamp, getCollectedCount } from '$lib/stores/stamps';
	import { setToast } from '$lib/stores/toasts';
	import { TOAST_TYPE } from '../../../custom';
	import { minStampCountRequired } from '../../../const';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let processing = $state(true);
	let success = $state(false);
	let error = $state('');

	onMount(() => {
		processToken(data.token);
	});

	function processToken(token: string) {
		try {
			const hash = tokenHash(token);
			
			if (getExpectedStampHashes().includes(hash)) {
				// Valid stamp - save it
				saveStamp(token);
				success = true;
				
				setToast({
					type: TOAST_TYPE.SUCCESS,
					message: 'Stamp collected successfully!'
				});

				// Check if stamp rally is completed
				if (getCollectedCount() >= minStampCountRequired) {
					setTimeout(() => {
						setToast({
							type: TOAST_TYPE.SUCCESS,
							message: 'Stamp Rally completed!'
						});
					}, 1000);
				}

				// Redirect to home page after 2 seconds
				setTimeout(() => {
					goto('/');
				}, 2000);
			} else {
				// Invalid stamp
				error = 'This stamp is not valid for the current event.';
				setToast({
					type: TOAST_TYPE.ERROR,
					message: 'Invalid stamp!'
				});

				// Redirect to home page after 3 seconds
				setTimeout(() => {
					goto('/');
				}, 3000);
			}
		} catch (e) {
			error = 'Failed to process stamp. Please try again.';
			setToast({
				type: TOAST_TYPE.ERROR,
				message: 'Error processing stamp!'
			});

			// Redirect to home page after 3 seconds
			setTimeout(() => {
				goto('/');
			}, 3000);
		}
		
		processing = false;
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center space-y-6 p-4">
	{#if processing}
		<div class="loading loading-spinner loading-lg text-primary"></div>
		<h1 class="text-center text-2xl font-bold text-primary">Processing Stamp...</h1>
		<p class="text-center text-gray-600">Please wait while we validate your stamp.</p>
	{:else if success}
		<div class="text-center">
			<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
				<svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
			</div>
			<h1 class="text-2xl font-bold text-primary">Stamp Collected!</h1>
			<p class="mt-2 text-gray-600">Successfully added to your collection.</p>
			<p class="mt-4 text-sm text-gray-500">Redirecting to your stamp sheet...</p>
		</div>
	{:else if error}
		<div class="text-center">
			<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
				<svg class="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</div>
			<h1 class="text-2xl font-bold text-red-600">Error</h1>
			<p class="mt-2 text-gray-600">{error}</p>
			<p class="mt-4 text-sm text-gray-500">Redirecting to your stamp sheet...</p>
		</div>
	{/if}
</div> 