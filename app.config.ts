import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';
import unpluginicons from 'unplugin-icons/vite';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	server: {
		node: true,
		preset: 'node-server',
		prerender: {
			crawlLinks: true,
		},
	},
	vite: {
		plugins: [
			tailwindcss(),
			unpluginicons({
				defaultClass: 'size-full',
				compiler: 'solid',
				autoInstall: true,
			}),
		],
		server: {
			allowedHosts: ['127.0.0.1', 'localhost', '0.0.0.0'],
		},
		resolve: {
			alias: {
				// "~/*" → "./src/*"
				'~': path.resolve(__dirname, 'src'),
			},
		},
	},
});
