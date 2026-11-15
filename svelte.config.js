import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// fully prerendered static site, served by Cloudflare Workers static assets
		adapter: adapter({ pages: 'build', assets: 'build' })
	}
};

export default config;
