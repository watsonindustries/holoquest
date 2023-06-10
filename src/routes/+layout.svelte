<script lang="ts">
	import '../app.css';

	import { nickname, userToken, socket, scansChannel, toastStore } from '../store';

	import NavBar from '$lib/components/NavBar.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { Socket } from 'phoenix';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { initChannel } from '../phoenix-client';

	export let data: LayoutData;

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

<div class="toast-center toast-bottom toast">
	{#if $toastStore}
		<Toast {...$toastStore} />
	{/if}
</div>

<slot />
