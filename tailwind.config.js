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
			typography: ({ theme }) => ({
				yellow: {
					css: {
						'--tw-prose-body': theme('colors.yellow[950]'),
						'--tw-prose-headings': theme('colors.yellow[950]'),
						'--tw-prose-lead': theme('colors.yellow[900]'),
						'--tw-prose-links': theme('colors.yellow[900]'),
						'--tw-prose-bold': theme('colors.yellow[950]'),
						'--tw-prose-counters': theme('colors.yellow[600]'),
						'--tw-prose-bullets': theme('colors.yellow[400]'),
						'--tw-prose-hr': theme('colors.yellow[600]'),
						'--tw-prose-quotes': theme('colors.yellow[950]'),
						'--tw-prose-quote-borders': theme('colors.yellow[300]'),
						'--tw-prose-captions': theme('colors.yellow[700]'),
						'--tw-prose-code': theme('colors.yellow[950]'),
						'--tw-prose-pre-code': theme('colors.yellow[950]'),
						'--tw-prose-pre-bg': theme('colors.yellow[100]'),
						'--tw-prose-th-borders': theme('colors.yellow[400]'),
						'--tw-prose-td-borders': theme('colors.yellow[300]'),
						'--tw-prose-invert-body': theme('colors.yellow[50]'),
						'--tw-prose-invert-headings': theme('colors.yellow[50]'),
						'--tw-prose-invert-lead': theme('colors.yellow[100]'),
						'--tw-prose-invert-links': theme('colors.yellow[100]'),
						'--tw-prose-invert-bold': theme('colors.yellow[50]'),
						'--tw-prose-invert-counters': theme('colors.yellow[600]'),
						'--tw-prose-invert-bullets': theme('colors.yellow[700]'),
						'--tw-prose-invert-hr': theme('colors.yellow[900]'),
						'--tw-prose-invert-quotes': theme('colors.yellow[50]'),
						'--tw-prose-invert-quote-borders': theme('colors.yellow[800]'),
						'--tw-prose-invert-captions': theme('colors.yellow[600]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.yellow[100]'),
						'--tw-prose-invert-pre-bg': '#090900',
						'--tw-prose-invert-th-borders': theme('colors.yellow[600]'),
						'--tw-prose-invert-td-borders': theme('colors.yellow[700]')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
