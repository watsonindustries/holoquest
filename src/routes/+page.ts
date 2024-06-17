import { expectedStamps } from '$lib/stores/stamps';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async () => {
	const stamps = Object.values(get(expectedStamps));

	return { stamps };
}) satisfies PageLoad;
