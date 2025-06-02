import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;
export const csr = true;

export const load = (async ({ params }) => {
	// Pass the token to the page component for processing
	return {
		token: params.id
	};
}) satisfies PageLoad;
