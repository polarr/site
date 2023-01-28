// See https://kit.svelte.dev/docs/types#app
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
	}
}

export {};
