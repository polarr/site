import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { searchForWorkspaceRoot } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()]
};

export default config;
