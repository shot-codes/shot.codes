/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Iosevka Sans'],
				serif: ['Gambarino Regular'],
				mono: ['Iosevka Sans'],
				title: ['Humane']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
