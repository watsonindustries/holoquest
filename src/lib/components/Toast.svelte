<script lang="ts">
	import { fade } from 'svelte/transition';
	import { TOAST_TYPE } from '../../custom';
	import type { ToastType } from '../../custom';

	interface Props {
		type?: ToastType;
		message: string;
	}

	let { type = TOAST_TYPE.SUCCESS, message }: Props = $props();
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
