<script lang="ts">
	import type { ConnectionState } from 'phoenix';

	import { socket } from '../../store';

	let connectionState : ConnectionState = 'open';

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
	// $: console.log(connectionState);
</script>

<span class="absolute -right-1 -top-1 flex h-3 w-3">
	<span
		class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 {connectionIndicatorClass}"
	/>
	<span class="relative inline-flex h-3 w-3 rounded-full {connectionIndicatorClass}" />
</span>
