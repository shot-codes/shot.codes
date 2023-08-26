/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Helvetica Neue'],
				serif: ['Instrument Serif'],
				mono: ['Heming'],
				title: ['Humane']
			}
		}
	},
	plugins: []
};
