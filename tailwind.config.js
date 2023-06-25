/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
			},
			fontFamily: {
				geologica: ['geologica', 'sans-serif']
			},
			wordBreak: ['break-word']
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#73dcff',
					'primary-focus': 'mediumblue',
					secondary: '#546aff'
				},
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					primary: '#73dcff',
					'primary-focus': 'mediumblue',
					secondary: '#546aff'
				}
			}
		]
	}
};
