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
	import { Socket } from 'phoenix';
	import { onMount } from 'svelte';
	import { registerUser } from '../client';
	import { socketServerURL } from '../const';
	import { generateNickname } from 'hololive-nick-gen';
	import { TOAST_TYPE } from '../custom';

	onMount(async () => {
		// Initialize the stores with the nickname and user token found locally
		// If first time using the app, generate a new nickname
		$nickname = localStorage.getItem('nickname') || generateNickname();
		$userToken = localStorage.getItem('userToken');

		nickname.subscribe((value) => {
			localStorage.setItem('nickname', value);
		});

		if (!$userToken) {
			// When no user token is found locally, register a new user and save its token
			try {
				const res = await registerUser($nickname);
				$userToken = res.data.id;
				localStorage.setItem('userToken', $userToken);
			} catch (error) {
				console.error(error);
			}
		}

		$socket = new Socket(socketServerURL, { params: { userToken: $userToken } });
		$notificationsChannel = $socket.channel('notifications');

		// Register handlers
		$notificationsChannel.on('shout', (payload) => {
			console.log('Received shout:', payload);
		});

		$notificationsChannel.on('ping', (payload) => {
			console.log('Received ping:', payload);
			console.log('Sending pong...');
			$notificationsChannel?.push('pong', { body: 'pong' });
		});

		$notificationsChannel.on('collected-broadcast', (payload) => {
			console.log('Received collected-broadcast:', payload);

			if (payload.nickname === $nickname) return;

			setToast({
				type: TOAST_TYPE.SUCCESS,
				message: `User ${payload.nickname} found a stamp!`
			});
		});

		$notificationsChannel.on('rally-completed', (payload) => {
			console.log('Received rally-completed:', payload);

			if (payload.nickname === $nickname) return;

			setToast({
				type: TOAST_TYPE.SUCCESS,
				message: `User ${payload.nickname} completed the rally!`
			});
		});

		// TODO: Maybe attach to a dedicated channel for this?
		$notificationsChannel.on('msg', (payload) => {
			console.log('Received msg:', payload);
			setToast({
				type: TOAST_TYPE.SUCCESS,
				message: payload.message
			});
		});

		try {
			$socket.connect();
		} catch (e) {
			console.error(e);
		}

		try {
			$notificationsChannel.join().receive('ok', (response) => {
				console.log('Joined notifications channel successfully', response);
			});
		} catch (error) {
			console.error(error);
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
