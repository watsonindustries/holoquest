<script lang="ts">
	import type { PageData } from './$types';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowTopRightOnSquare, ChevronLeft } from '@steeze-ui/heroicons';

	export let data: PageData;

	const { name, description, image_url, external_url, booth_id, nsfw } = data.stamp;
</script>

<a href="/" id="back-button" class="btn-ghost btn mb-4 w-fit justify-start gap-2 rounded-full"
	><Icon src={ChevronLeft} theme="solid" class="color-gray-900" size="20px" /> Back</a
>

<div
	class="mx-4 flex flex-col items-center justify-center space-y-4 align-middle font-geologica"
	id="stamp-info"
>
	<div class="avatar">
		<div
			class="mx-auto w-6/12 rounded-full ring-4 ring-secondary ring-offset-2 ring-offset-base-100"
		>
			<img src={image_url} alt={name + 'promo image.'} />
		</div>
	</div>

	<h1 class="break-all text-4xl font-bold tracking-tighter text-primary" id="stamp-name">
		{name}
		{#if nsfw}
			<span class="rounded-full bg-error px-1 py-0.5 align-middle text-xs text-white"> 18+ </span>
		{/if}
	</h1>
	<h2 id="booth-id" class="text-2xl tracking-wide text-secondary">
		{booth_id ?? 'ask for booth number'}
	</h2>

	{#if description}
		<p class="">
			{description}
		</p>
	{/if}

	{#if external_url}
		<a
			href={external_url}
			class="btn-secondary btn max-w-screen-lg gap-2 rounded-full text-white shadow-lg"
			>Open in DoKomi app <Icon
				src={ArrowTopRightOnSquare}
				theme="solid"
				class="color-gray-900"
				size="20px"
			/></a
		>
	{/if}
</div>
