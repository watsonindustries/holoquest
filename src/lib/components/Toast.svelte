<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { ToastType } from '../../custom';

	export let type: ToastType = 'success';
	export let message: string;
</script>

<div class="toast-center toast-bottom toast w-52">
	<div class="alert alert-{type}" transition:fade>
		<div class="text-center">
			<span>{message}</span>
		</div>
	</div>
</div>
