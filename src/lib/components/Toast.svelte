<script lang="ts">
	import { fade } from 'svelte/transition';

	export let type: 'success' | 'error';
	export let message: string;
</script>

<div class="toast toast-bottom toast-center w-52">
	<div class="alert alert-{type}" transition:fade>
		<div>
			<span>{message}</span>
		</div>
	</div>
</div>
