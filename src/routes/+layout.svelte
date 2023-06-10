<script lang="ts">
	import '../app.css';

	import { nickname, userToken, socket, scansChannel } from '../store';

	import NavBar from '$lib/components/NavBar.svelte';
	import { Socket } from 'phoenix';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { initChannel } from '../phoenix-client';

	export let data: LayoutData;

	// ConnectionState = "connecting" | "open" | "closing" | "closed"

	onMount(() => {
		$nickname = localStorage.getItem('nickname') || 'anonymous';
		$userToken = localStorage.getItem('userToken');

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

<NavBar />

<slot />
