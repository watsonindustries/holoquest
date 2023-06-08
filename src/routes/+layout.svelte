<script lang="ts">
	import '../app.css';

	import NavBar from '$lib/components/NavBar.svelte';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	
	export let data: LayoutData;


	onMount(() => {
		window.channel = data.channel;
	});
</script>

<NavBar />

<slot />
