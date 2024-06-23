<script lang="ts">
	import { fade } from 'svelte/transition';
	import placeholderImg from '$lib/assets/watamesmug.jpg';

	export let hash: string;
	export let index: number;
	export let name: string;
	export let collected = false;
	export let navURL = `/partner/${hash}`;
	export let nsfw = false;

	const PLACEHOLDER_STAMP_IMG = placeholderImg;

	export let img = PLACEHOLDER_STAMP_IMG;

	export const fadeDuration = 50;
</script>

<a href={navURL}>
	<div
		class="flex flex-col items-center"
		in:fade|global={{ duration: fadeDuration, delay: 150 * index + 500 }}
	>
		<div
			class="flex h-28 w-28 items-center justify-center rounded-full {collected
				? 'bg-gradient-to-br from-primary to-secondary'
				: 'bg-secondary bg-opacity-30'} "
		>
			<div class="flex h-24 w-24 items-center justify-center rounded-full">
				<div class="relative flex h-24 w-24 items-center justify-center rounded-full bg-white">
					{#if nsfw}
						<div
							class="absolute right-0 top-0 rounded-full px-1 py-0.5 text-xs text-white"
							class:bg-red-400={!collected}
							class:bg-red-500={collected}
						>
							18+
						</div>
					{/if}
					<img src={img} alt={name} class="h-20 w-20 rounded-full" class:opacity-30={!collected} />
				</div>
			</div>
		</div>
		<div class="mt-2 w-8/12 break-all text-center text-secondary" class:font-bold={collected}>
			{name}
		</div>
	</div>
</a>
