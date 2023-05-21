import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vitest/config';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [sveltekit(), basicSsl(), SvelteKitPWA({
		registerType: 'autoUpdate',
		strategies: 'generateSW',
		srcDir: './src',
		manifest: {
			start_url: '/',
			name: 'HoloQuest',
			short_name: 'HoloQuest',
			scope: '/',
			display: 'standalone',
		},
		workbox: {
			globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
		},
	})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		https: true
	}
});
