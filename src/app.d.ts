// See https://kit.svelte.dev/docs/types#app

import type { IconType } from "flowbite-svelte/types";
import type { SvelteComponent, SvelteComponentTyped } from "svelte";
import type { SvelteComponentDev } from "svelte/internal";

type BadgeColor = "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "dark";

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
			color?: BadgeColor;
		}

		declare interface Project {
			title: string;
            date?: string;
			subtitle?: string;
			link?: string;
			description: string;
			imageSrc: string;
			links: ProjectLink[];
			technologies: ProjectBadge[];
		}
	}

	namespace Blog {
		type DateStyle = Intl.DateTimeFormatOptions['dateStyle']
		type Categories = 'math' | 'cs' | 'algorithms' | 'physics' | 'contests' | 'graphics' | 'problem-journal'

		declare interface Post {
			title: string
			slug: string
			description: string
			date: string
			categories: Blog.Categories[]
            problems?: string[]
            journalOnly: boolean
			published: boolean
		}
	}
}

export {};
