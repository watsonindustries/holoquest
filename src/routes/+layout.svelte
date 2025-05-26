<script lang="ts">
	import '../app.css';

	import { onNavigate } from '$app/navigation';
	import { setToast, toastStore } from '$lib/stores/toasts';
	import { userToken } from '$lib/stores/userinfo';

	import Navigation from '$lib/components/Navigation.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { onMount } from 'svelte';

	import { dev } from '$app/environment';
	import { saveStamp, collectedStamps } from '$lib/stores/stamps';
	interface Props {
		children?: import('svelte').Snippet<[any]>;
	}

	let { children }: Props = $props();

	onMount(async () => {
		// Initialize the stores with the nickname and user token found locally
		$userToken = localStorage.getItem('userToken'); // FIXME: Replace with persisted store

		// Bind stuff to window for debugging
		if (dev || localStorage.getItem('debug') === 'true') {
			Object.assign(window, {
				setToast: setToast,
				saveStamp: saveStamp,
				collectedStamps: collectedStamps
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
</script>

<Navigation>
	<div class="toast-center toast-bottom toast z-50">
		{#if $toastStore}
			<Toast {...$toastStore} />
		{/if}
	</div>

	{@render children?.({ class: "overscroll-y-none", })}
</Navigation>
