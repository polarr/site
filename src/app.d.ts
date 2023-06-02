// See https://kit.svelte.dev/docs/types#app

import type { IconType } from "flowbite-svelte/types";
import type { SvelteComponent, SvelteComponentTyped } from "svelte";
import type { SvelteComponentDev } from "svelte/internal";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		declare interface Badge {
			name: string;
			slug: string;
			logoColor?: string;
			loved?: boolean;
			color: string;
		}

		declare interface Achievement {
			title: string;
			date: string;
			icon:  any;
			description?: string;
		}

		declare interface ProjectLink {
			icon: any;
			label: string;
			href: string;
			iconRight?: boolean;
		}

		declare interface ProjectBadge {
			name: string;
			slug: string;
			logoColor?: string;
			color: string;
		}

		declare interface Project {
			title: string;
			description: string;
			imageSrc: string;
			links: ProjectLink[];
			technologies: ProjectBadge[];
		}
	}
}

export {};
