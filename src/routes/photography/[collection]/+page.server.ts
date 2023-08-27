import type { PageServerLoad } from './$types';
import { readFileSync } from 'node:fs';

export const load = (({ params }) => {
	let collectionConfig;
	try {
		const data = readFileSync(`./src/lib/assets/images/_gen/${params.collection}.json`, 'utf-8');
		collectionConfig = JSON.parse(data);
	} catch (error) {
		console.error('Error occurred while reading directory:', error);
	}

	return {
		collection: params.collection,
		collectionConfig
	};
}) satisfies PageServerLoad;
