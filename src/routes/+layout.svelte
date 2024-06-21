<script lang="ts">
	import '../app.css';

	import { setToast, toastStore } from '$lib/stores/toasts';
	import { userToken } from '$lib/stores/userinfo';

	import Navigation from '$lib/components/Navigation.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { onMount } from 'svelte';
	import { generateNickname } from 'hololive-nick-gen';

	import { dev } from '$app/environment';

	onMount(async () => {
		// Initialize the stores with the nickname and user token found locally
		// If first time using the app, generate a new nickname
		$userToken = localStorage.getItem('userToken');

		// Bind stuff to window for debugging
		if (dev || localStorage.getItem('debug') === 'true') {
			Object.assign(window, {
				setToast: setToast
			});
		}
	});
</script>

<Navigation>
	<div class="toast-center toast-bottom toast z-50">
		{#if $toastStore}
			<Toast {...$toastStore} />
		{/if}
	</div>

	<slot class="overscroll-y-none" />
</Navigation>
