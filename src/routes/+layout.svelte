<script lang="ts">
	import '../app.css';

	import NavBar from '$lib/components/NavBar.svelte';
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.webmanifest">
</svelte:head>

<NavBar />

<slot />
