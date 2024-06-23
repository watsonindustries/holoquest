import type { Tables } from '$lib/database.types';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xywgwitzwfoqknoctrmj.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5d2d3aXR6d2ZvcWtub2N0cm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMTE1ODksImV4cCI6MjAzMTc4NzU4OX0.-bQT8up9g6s8gSbaC6p-zdDEm9Gy5vBB9MRMJCo9efk';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchStamps(): Promise<Tables<'stamps'>[]> {
	const { data: stamps, error } = await supabase
		.from('stamps')
		.select('booth_id, name, description, image_url, external_url, hash, nsfw');

	if (error) {
		console.error('Error fetching stamp data:', error);
		throw new Error('Error fetching stamp data');
	}

	return stamps as Tables<'stamps'>[];
}
