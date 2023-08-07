import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const data: Record<string, { default: string; [Symbol.toStringTag]: string }> = import.meta.glob(
		'../../../static/images/*/*.png',
		{ eager: true }
	);

	const collections = Array.from(
		new Set(
			Object.keys(data).map((path) => {
				const folderPath = path.split('/').slice(0, -1).join('/');
				return folderPath.substring(folderPath.lastIndexOf('/') + 1);
			})
		)
	);

	return {
		collections
	};
}) satisfies LayoutServerLoad;
