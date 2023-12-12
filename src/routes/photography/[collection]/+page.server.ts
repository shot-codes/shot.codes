import type { PageServerLoad } from './$types';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { error } from '@sveltejs/kit';
import type ImageSet from 'web-image-gen-svelte';

export const load = (({ params }) => {
	let collectionConfig: ImageSet;
	try {
		const data = readFileSync(`./src/lib/assets/images/_gen/${params.collection}.json`, 'utf-8');
		collectionConfig = JSON.parse(data);

		const collectionSources = readdirSync(`./static/images/${params.collection}`)
			.filter((file) =>
				['.png', '.jpg', '.jpeg', '.gif'].includes(path.extname(file).toLowerCase())
			)
			.map((fileName) => `/images/${params.collection}/${fileName}`);

		return {
			collection: params.collection,
			collectionConfig,
			collectionSources
		};
	} catch (error) {
		console.error('Error occurred while reading directory:', error);
	}

	throw error(404, 'This is not the collection you are looking for...');
}) satisfies PageServerLoad;
