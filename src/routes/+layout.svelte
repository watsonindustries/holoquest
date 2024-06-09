<script lang="ts">
	import '../app.css';

	import {
		nickname,
		userToken,
		socket,
		notificationsChannel,
		toastStore,
		setToast
	} from '../store';

	import Navigation from '$lib/components/Navigation.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { onMount } from 'svelte';
	import { generateNickname } from 'hololive-nick-gen';

	import { dev } from '$app/environment';

	onMount(async () => {
		// Initialize the stores with the nickname and user token found locally
		// If first time using the app, generate a new nickname
		$nickname = localStorage.getItem('nickname') || generateNickname();
		$userToken = localStorage.getItem('userToken');

		nickname.subscribe((value) => {
			localStorage.setItem('nickname', value);
		});

		// Bind stuff to window for debugging
		if (dev || localStorage.getItem('debug') === 'true') {
			Object.assign(window, {
				socket: $socket,
				notificationsChannel: $notificationsChannel,
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
