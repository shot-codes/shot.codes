import type { PageServerLoad } from './$types';
import { readFileSync } from 'node:fs';
import { error } from '@sveltejs/kit';
import type ImageSet from 'web-image-gen-svelte';

export const load = (({ params }) => {
	let collectionConfig: ImageSet;
	try {
		const data = readFileSync(`./src/lib/assets/images/_gen/${params.collection}.json`, 'utf-8');
		collectionConfig = JSON.parse(data);
		return {
			collection: params.collection,
			collectionConfig
		};
	} catch (error) {
		console.error('Error occurred while reading directory:', error);
	}

	throw error(404, "Can't find collection");
}) satisfies PageServerLoad;
