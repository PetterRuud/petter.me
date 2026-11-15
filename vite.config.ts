import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig, lazyPlugins } from 'vite-plus';

export default defineConfig({
	staged: {
		'*': 'vp check --fix'
	},
	lint: {
		jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
		rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
		options: { typeAware: true, typeCheck: true }
	},
	fmt: {
		useTabs: true,
		singleQuote: true,
		trailingComma: 'none',
		printWidth: 100,
		sortPackageJson: false,
		svelte: {},
		associations: [
			{
				files: ['*.svelte'],
				language: 'svelte'
			}
		],
		ignorePatterns: [
			'.DS_Store',
			'node_modules',
			'/build',
			'/.svelte-kit',
			'/package',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	},
	plugins: lazyPlugins(() => [
		// fully prerendered static site, served by Cloudflare Workers static assets
		sveltekit({ adapter: adapter({ pages: 'build', assets: 'build' }) })
	])
});
