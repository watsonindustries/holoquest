<script lang="ts">
	import { fade } from 'svelte/transition';
	import { TOAST_TYPE } from '../../custom';
	import type { ToastType } from '../../custom';

	export let type: ToastType = TOAST_TYPE.SUCCESS;
	export let message: string;
</script>

<div class="toast-center toast-bottom toast -z-50 w-60">
	<div
		class="alert alert-{type}"
		class:alert-success={type === TOAST_TYPE.SUCCESS}
		class:alert-error={type === TOAST_TYPE.ERROR}
		transition:fade|global
	>
		<div class="text-center">
			<span>{message}</span>
		</div>
	</div>
</div>
