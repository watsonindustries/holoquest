export const csr = true;

import type { LayoutLoad } from './$types';

import { expectedStamps } from '$lib/stores/stamps';
import { supabase } from '../supabase-client';

export const load = (async () => {
	await startupTasks();
	return {};
}) satisfies LayoutLoad;

// Startup tasks
async function startupTasks() {
	console.log('Running startup tasks...');
	await updateExpectedStamps();
}

async function updateExpectedStamps() {
	console.log('Fetching stamp data...');
	const { data } = await supabase.from('stamps').select('*');
	const stampsData = data?.reduce((acc, stamp) => {
		const { hash, ...rest } = stamp;
		acc[hash] = rest;
		return acc;
	}, {});
	expectedStamps.set(stampsData);
}
