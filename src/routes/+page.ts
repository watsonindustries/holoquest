import { supabase } from '../supabase-client';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async () => {
	const { data } = await supabase.from('stamps').select('*');

	return { stamps: data };
}) satisfies PageLoad;
