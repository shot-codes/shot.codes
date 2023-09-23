import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],

	kit: {
		adapter: adapter(),
		alias: {
			$routes: './src/routes/'
		},
		csp: {
			directives: {
				'script-src': ['self', 'unsafe-eval'],
				'worker-src': ['self', 'blob:']
			}
		}
	}
};

export default config;
