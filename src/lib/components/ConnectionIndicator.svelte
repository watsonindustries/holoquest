<script lang="ts">
	import type { ConnectionState } from 'phoenix';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Wifi } from '@steeze-ui/heroicons';

	import { onMount } from 'svelte';

	let connectionState: ConnectionState = 'connecting';

	$socket?.onClose(() => {
		console.log('Lost connection to server');
		connectionState = 'closed';
	});

	$socket?.onOpen(() => {
		console.log('Connection to server reestablished');
		connectionState = 'open';
	});

	function getConnectionIndicatorClass(connectionState: ConnectionState) {
		switch (connectionState) {
			case 'connecting':
				return 'bg-warning';
			case 'open':
				return 'bg-success';
			case 'closing':
				return 'bg-warning';
			case 'closed':
				return 'bg-error';
		}
	}

	$: connectionIndicatorClass = getConnectionIndicatorClass(connectionState);

	onMount(() => {
		setTimeout(() => {
			connectionState = $socket?.connectionState() as ConnectionState;
		}, 5000);
	});
</script>

<button
	class="btn-ghost btn-circle btn tooltip tooltip-left"
	data-tip={connectionState === 'open' ? 'Connected' : 'Disconnected'}
>
	<div class="indicator relative">
		<Icon src={Wifi} theme="solid" class="color-gray-900" size="20" />
		<span class="absolute -right-1 -top-1 flex h-3 w-3">
			<span
				class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 {connectionIndicatorClass}"
			/>
			<span class="relative inline-flex h-3 w-3 rounded-full {connectionIndicatorClass}" />
		</span>
	</div>
</button>
