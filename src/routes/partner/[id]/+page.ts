import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import { expectedStamps } from '../../../const';

export const load = (async ({ params }) => {
	const { id } = params;

	const partner = expectedStamps.find((stamp) => stamp.id === Number(id));

	if (!partner) {
		return error(404, 'Not found');
	}

	return { partner };
}) satisfies PageLoad;
