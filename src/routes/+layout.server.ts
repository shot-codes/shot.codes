import type { LayoutServerLoad } from './$types';
import { readdirSync } from 'node:fs';

export const load = (async () => {
	const dataPhotography: Record<string, { default: string; [Symbol.toStringTag]: string }> =
		import.meta.glob('../../static/images/*/*.{png,jpg,jpeg}', { eager: true });

	const photographyCollections = Array.from(
		new Set(
			Object.keys(dataPhotography).map((path) => {
				const folderPath = path.split('/').slice(0, -1).join('/');
				return folderPath.substring(folderPath.lastIndexOf('/') + 1);
			})
		)
	);

	let blogPosts: Array<string> = [];
	try {
		const files = readdirSync('./static/posts/');
		blogPosts = files;
	} catch (error) {
		console.error('Error occurred while reading directory:', error);
	}

	return {
		photographyCollections,
		blogPosts
	};
}) satisfies LayoutServerLoad;
