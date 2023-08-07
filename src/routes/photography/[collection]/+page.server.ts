import type { PageServerLoad } from './$types';
import { readdirSync } from 'node:fs';

export const load = (({ params }) => {
	let images: Array<string> = [];
	try {
		const files = readdirSync(`./static/images/${params.collection}`);
		images = files;
	} catch (error) {
		console.error('Error occurred while reading directory:', error);
	}

	return {
		collection: params.collection,
		images
	};
}) satisfies PageServerLoad;
