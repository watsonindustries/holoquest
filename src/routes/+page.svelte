<script lang="ts">
	import StampSheet from '$lib/components/StampSheet.svelte';
	import type { Tables } from '$lib/database.types';
	import { eventInfo } from '$lib/stores/event';
	import { expectedStamps } from '$lib/stores/stamps.js';
	import { get } from 'svelte/store';
	import type { PageData } from './$types';

	let stampsCollection = $derived(Object.entries($expectedStamps).map(([key, value]) => ({
		...(value as Object),
		hash: key
	})) as Tables<'stamps'>[]);

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let event = get(eventInfo);
</script>

{#if Object.keys(event).length === 0 || event === undefined}
	<div class="flex flex-col items-center space-y-4">
		<h2 class="mb-2 text-xl font-semibold">Pick an event:</h2>
		{#each data.events as eventItem}
			<a
				data-sveltekit-reload
				href={`/?eventId=${eventItem.id}`}
				class="hover:bg-primary-dark w-full max-w-md rounded-full bg-primary px-4 py-2 text-center text-white transition-colors duration-200 ease-in-out"
			>
				{eventItem.name}
			</a>
		{/each}
	</div>
{:else}
	<StampSheet stamps={stampsCollection} />
{/if}
