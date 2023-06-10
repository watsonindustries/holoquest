export const csr = true;

import type { LayoutLoad } from './$types';

export const load = (() => {
	const socketServerURL = 'ws://localhost:4000/socket';

	return { socketServerURL };
}) satisfies LayoutLoad;
