/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Iosevka Sans'],
				serif: ['Iosevka Serif'],
				mono: ['Iosevka Serif'],
				title: ['Humane']
			}
		}
	},
	plugins: []
};
