<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { QrCode } from '@steeze-ui/heroicons';
</script>

<a
	id="scanner"
	href="/scanner"
	class="btn-xl btn-info btn-circle fixed bottom-16 right-8 z-50 flex h-20 w-20 items-center justify-center rounded-full p-2 align-middle font-bold text-base-100 shadow-lg"
	tabindex="-1"
	aria-disabled="true"
>
	<Icon src={QrCode} theme="solid" class="p-1 align-middle" />
</a>
