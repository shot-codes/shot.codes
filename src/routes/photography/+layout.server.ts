import type { LayoutServerLoad } from './$types';
import { readdirSync } from 'node:fs';

export const load = (async () => {
	const collections = readdirSync('static/images', { withFileTypes: true })
		.filter((f) => f.isDirectory())
		.map((f) => f.name);

	return { collections };
}) satisfies LayoutServerLoad;
