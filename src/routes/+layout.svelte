<script lang="ts">
    import type { LayoutData } from './$types';
    import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
    
    export let data: LayoutData;
</script>

<NavBar></NavBar>

<slot />