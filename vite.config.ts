import { defineConfig } from 'vite';
import wasmPack from 'vite-plugin-wasm';

export default defineConfig({
	base: '/DEMVis',
	plugins: [wasmPack()],
	server: {
		host: '0.0.0.0',
		port: 5173
	},
});
