<script lang="ts">
	import StampSheet from '$lib/components/StampSheet.svelte';
	import { expectedStamps } from '$lib/stores/stamps.js';

	$: stampsCollection = Object.entries($expectedStamps).map(([key, value]) => ({
		...value,
		hash: key
	}));
</script>

<StampSheet stamps={stampsCollection} />
