<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';

	import { CheckCircle } from '@steeze-ui/heroicons';

	export let active = false;
	export let href = '/result';
</script>

<div class="mb-4 flex justify-center">
	<a
		{href}
		class="btn-xl btn-success btn gap-2 rounded-full"
		class:btn-disabled={!active}
		tabindex="-1"
		aria-disabled="true"
	>
		<Icon src={CheckCircle} theme="solid" class="color-gray-900 h-8 w-8" />
		{active ? 'Complete quest' : 'Collect more stamps'}</a
	>
</div>
