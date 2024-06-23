import { expectedStamps } from '$lib/stores/stamps';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async () => {
	const stamps = Object.entries(get(expectedStamps)).map(([key, value]) => ({
		...value,
		hash: key
	}));

	return { stamps };
}) satisfies PageLoad;
