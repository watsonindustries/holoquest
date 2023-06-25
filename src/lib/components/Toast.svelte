<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ToastType } from '../../custom';

	export let type: ToastType = ToastType.SUCCESS;
	export let message: string;
</script>

<div class="toast-center toast-bottom toast -z-50 w-60">
	<div
		class="alert alert-{type}"
		class:alert-success={type === ToastType.SUCCESS}
		class:alert-error={type === ToastType.ERROR}
		transition:fade>
		<div class="text-center">
			<span>{message}</span>
		</div>
	</div>
</div>
