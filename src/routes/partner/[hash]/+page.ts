import { expectedStamps } from '$lib/stores/stamps';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { hash } = params;

	const stamp = get(expectedStamps)[hash];

	if (!stamp) {
		return error(404, 'Not found');
	}

	return { stamp };
}) satisfies PageLoad;
