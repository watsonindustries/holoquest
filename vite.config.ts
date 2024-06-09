import { sveltekit } from '@sveltejs/kit/vite';
import ServerUrlCopy from 'vite-plugin-url-copy';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), ServerUrlCopy({ qrcode: { disabled: false } })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: true,
		https: false
	},
	preview: {
		host: true
	},
	define: {
		'process.env.NODE_ENV': process.env.NODE_ENV === 'production' ? '"production"' : '"development"'
	}
});
