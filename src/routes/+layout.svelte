<script lang="ts">
	import '../app.css';

	import { nickname, userToken, socket, scansChannel, toastStore } from '../store';

	import Navigation from '$lib/components/Navigation.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { Socket } from 'phoenix';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { initChannel } from '../phoenix-client';
	import { registerUser } from '../client';

	export let data: LayoutData;

	onMount(async () => {
		$nickname = localStorage.getItem('nickname') || 'anonymous';
		$userToken = localStorage.getItem('userToken');

		if (!$userToken) {
			// When no user token is found locally, register a new user and save its token
			try {
				const res = await registerUser();
				$userToken = res.data.id;
				localStorage.setItem('userToken', $userToken);
			} catch (error) {
				console.error(error);
			}
		}

		$socket = new Socket(data.socketServerURL, { params: { userToken: $userToken } });
		$scansChannel = initChannel($socket, 'notifications:scans');

		try {
			$socket.connect();
		} catch (e) {
			console.error(e);
		}

		try {
			$scansChannel.join().receive('ok', (response) => {
				console.log('Joined successfully', response);
			});
		} catch (error) {
			console.error(error);
		}
	});
</script>

<Navigation>
	<div class="toast-center toast-bottom toast">
		{#if $toastStore}
			<Toast {...$toastStore} />
		{/if}
	</div>
	
	<slot />	
</Navigation>

