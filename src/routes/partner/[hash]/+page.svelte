<script lang="ts">
	import type { PageData } from './$types';

	import { fade } from 'svelte/transition';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowTopRightOnSquare, ChevronLeft } from '@steeze-ui/heroicons';

	export let data: PageData;

	const delay = 500;

	const { name, description, image_url, external_url } = data.stamp;
</script>

<a
	href="/"
	in:fade|global={{ delay }}
	class="btn-ghost btn mb-4 w-fit justify-start gap-2 rounded-full"
	><Icon src={ChevronLeft} theme="solid" class="color-gray-900" size="20px" /> Back</a
>

<div class="mx-4 space-y-6" in:fade|global={{ delay }}>
	<img src={image_url} class="mask mask-squircle w-6/12" alt={name + ' promo image.'} />

	<h1 class="break-all font-geologica text-4xl font-bold text-primary">{name}</h1>

	<p class="font-geologica">
		{description}
	</p>

	<a href={external_url} class="btn-secondary btn max-w-screen-lg gap-2 rounded-full text-white"
		>Open in DoKomi app <Icon
			src={ArrowTopRightOnSquare}
			theme="solid"
			class="color-gray-900"
			size="20px"
		/></a
	>
</div>
