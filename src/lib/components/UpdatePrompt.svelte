<script lang="ts">
	import { fade } from 'svelte/transition';
	import { activateUpdate, type ServiceWorkerUpdate } from '../service-worker-registration';

	interface Props {
		update: ServiceWorkerUpdate | null;
		onClose: () => void;
	}

	let { update, onClose }: Props = $props();

	function handleUpdate() {
		if (update?.registration) {
			activateUpdate(update.registration);
			onClose();
		}
	}

	function handleLater() {
		onClose();
	}
</script>

{#if update?.available}
	<div 
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
		transition:fade={{ duration: 200 }}
	>
		<div class="mx-4 max-w-md rounded-lg bg-white p-6 shadow-xl">
			<div class="flex items-center space-x-3 mb-4">
				<div class="flex-shrink-0">
					<svg class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 8m4-4v12" />
					</svg>
				</div>
				<div>
					<h3 class="text-lg font-medium text-gray-900">App Update Available</h3>
				</div>
			</div>
			
			<p class="text-sm text-gray-600 mb-6">
				A new version of HoloQuest is available with improvements and bug fixes. 
				Update now for the best experience.
			</p>
			
			<div class="flex space-x-3">
				<button 
					onclick={handleUpdate}
					class="flex-1 btn btn-primary rounded-full text-white"
				>
					Update Now
				</button>
				<button 
					onclick={handleLater}
					class="flex-1 btn btn-ghost rounded-full"
				>
					Later
				</button>
			</div>
		</div>
	</div>
{/if} 