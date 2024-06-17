<script lang="ts">
	import StampSheet from '$lib/components/StampSheet.svelte';

	export let data;
</script>

<StampSheet stamps={data.stamps} />
