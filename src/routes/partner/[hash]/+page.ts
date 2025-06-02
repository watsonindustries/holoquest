import { expectedStamps } from '$lib/stores/stamps';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { supabase } from '../../../supabase-client';
import type { PageLoad } from './$types';

export const ssr = false;
export const csr = true;

export const load = (async ({ params }) => {
	const { hash } = params;

	// First try to get the stamp from the store
	const stamps = get(expectedStamps) as Record<string, any>;
	let stamp = stamps?.[hash];

	// If not found in store, try to fetch it directly from the database
	if (!stamp) {
		const { data } = await supabase
			.from('stamps')
			.select('*')
			.eq('hash', hash)
			.eq('is_visible', true)
			.single();
		
		stamp = data;
	}

	if (!stamp) {
		return error(404, 'Not found');
	}

	return { stamp };
}) satisfies PageLoad;
