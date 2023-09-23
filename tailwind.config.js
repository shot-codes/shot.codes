/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Iosevka Sans'],
				serif: ['Iosevka Serif'],
				mono: ['Iosevka Sans'],
				title: ['Humane']
			},
			typography: (theme) => ({
				red: {
					css: {
						color: theme('colors.red.500'),
						a: {
							color: theme('colors.red.700'),
							'&:hover': {
								color: theme('colors.red.900')
							}
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
