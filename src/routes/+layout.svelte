<script lang="ts">
	import '../app.css';

	import { onNavigate } from '$app/navigation';
	import { setToast, toastStore } from '$lib/stores/toasts';
	import { userToken } from '$lib/stores/userinfo';

	import Navigation from '$lib/components/Navigation.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import UpdatePrompt from '$lib/components/UpdatePrompt.svelte';
	import { onMount } from 'svelte';

	import { dev } from '$app/environment';
	import { saveStamp, collectedStamps } from '$lib/stores/stamps';
	import { registerServiceWorker, onUpdateAvailable, checkForUpdates, type ServiceWorkerUpdate } from '$lib/service-worker-registration';

	interface Props {
		children?: import('svelte').Snippet<[any]>;
	}

	let { children }: Props = $props();
	let updateAvailable = $state<ServiceWorkerUpdate | null>(null);

	onMount(async () => {
		// Initialize the stores with the nickname and user token found locally
		$userToken = localStorage.getItem('userToken'); // FIXME: Replace with persisted store

		// Register service worker and set up update detection
		if (!dev) {
			await registerServiceWorker();
			
			onUpdateAvailable((update) => {
				updateAvailable = update;
			});

			// Check for updates every 30 minutes
			setInterval(() => {
				checkForUpdates();
			}, 30 * 60 * 1000);
		}

		// Bind stuff to window for debugging
		if (dev || localStorage.getItem('debug') === 'true') {
			Object.assign(window, {
				setToast: setToast,
				saveStamp: saveStamp,
				collectedStamps: collectedStamps,
				checkForUpdates: checkForUpdates
			});
		}
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	function handleUpdateClose() {
		updateAvailable = null;
	}
</script>

<Navigation>
	<div class="toast-center toast-bottom toast z-50">
		{#if $toastStore}
			<Toast {...$toastStore} />
		{/if}
	</div>

	<UpdatePrompt update={updateAvailable} onClose={handleUpdateClose} />

	{@render children?.({ class: "overscroll-y-none", })}
</Navigation>
