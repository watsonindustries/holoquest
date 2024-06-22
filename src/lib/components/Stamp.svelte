<script lang="ts">
	import { fade } from 'svelte/transition';
	import placeholderImg from '$lib/assets/watamesmug.jpg';

	export let id: number;
	export let name: string;
	export let collected = false;
	export let navURL = `/partner/${id}`;

	const PLACEHOLDER_STAMP_IMG = placeholderImg;

	export let img = PLACEHOLDER_STAMP_IMG;

	export const fadeDuration = 100;
</script>

<a href={navURL}>
	<div
		class="flex flex-col items-center"
		in:fade|global={{ duration: fadeDuration, delay: 150 * id + 500 }}
	>
		<div
			class="flex h-28 w-28 items-center justify-center rounded-full {collected
				? 'bg-gradient-to-br from-primary to-secondary'
				: 'bg-secondary bg-opacity-30'} "
		>
			<div class="flex h-24 w-24 items-center justify-center rounded-full">
				<div class="flex h-24 w-24 items-center justify-center rounded-full bg-white">
					<img src={img} alt={name} class="h-20 w-20 rounded-full" class:opacity-30={!collected} />
				</div>
			</div>
		</div>
		<div class="mt-2 w-8/12 break-all text-center text-secondary" class:font-bold={collected}>
			{name}
		</div>
	</div>
</a>
