import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
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
