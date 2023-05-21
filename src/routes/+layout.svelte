<script lang="ts">
	import '../app.css';

	import { pwaInfo } from 'virtual:pwa-info';

	import NavBar from '$lib/components/NavBar.svelte';

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<NavBar />

<slot />
