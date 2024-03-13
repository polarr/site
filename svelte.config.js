import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex'
import { getHighlighter } from 'shiki';
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from 'remark-math';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: 'src/routes/blog/mdsvex/mdsvex.svelte',
			extensions: ['.md', '.svx'],
			remarkPlugins: [
				remarkMath,
			],
			rehypePlugins: [
				rehypeKatexSvelte,
			],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getHighlighter({
						themes: ['github-dark'],
						langs: ['c', 'cpp', 'glsl', 'julia', 'python', 'javascript', 'typescript']
					})
					await highlighter.loadLanguage('c', 'cpp', 'glsl', 'julia', 'python', 'javascript', 'typescript')
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'github-dark' }))
					return `{@html \`${html}\` }`
				}
			}
		}),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
            handleHttpError: ({ path, referrer, message }) => {
				const redirects = [
					'/redirect/github',
					'/redirect/youtube',
					'/redirect/instagram',
					'/redirect/discord',
					'/redirect/steam',
					'/redirect/email',
					'/redirect/shadertoy',
				];

                // ignore deliberate link to redirects
                if (redirects.includes(path)) {
                    return;
                }

                // otherwise fail the build
                throw new Error(message);
            }
        }
	}
};

export default config;
