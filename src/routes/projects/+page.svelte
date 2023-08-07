<script lang="ts">
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { GithubBrand } from 'svelte-awesome-icons';

	const projects: App.Project[] = [
		{
			title: 'VOLY',
			description: 'VOLY is a multiplayer mathplatform for enhanced humans!',
			imageSrc: '/projects/voly.png',
			links: [
				{
					icon: GithubBrand,
					label: 'Github',
					href: 'https://github.com/virtual-olympiad/voly'
				}
			],
			technologies: [
				{
					name: 'SvelteKit',
					slug: 'Svelte',
					color: 'FF3E00'
				}
			]
		},
		{
			title: 'VOLY',
			description: 'VOLY is a multiplayer mathplatform for enhanced humans!',
			imageSrc: '/mango_v3.svg',
			links: [
				{
					icon: GithubBrand,
					label: 'Github',
					href: 'https://github.com/virtual-olympiad/voly'
				}
			],
			technologies: [
				{
					name: 'SvelteKit',
					slug: 'Svelte',
					color: 'FF3E00'
				}
			]
		}
	];
</script>



<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each projects as { title, description, links, imageSrc, technologies }, i}
		<Card img={imageSrc}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{@html description}
			</p>
			{#each links as { icon, label, href, iconRight = false }, j}
				<Button {href}>
					{#if iconRight}
						{label}
						<svelte:component this={icon} />
					{:else}
						<svelte:component this={icon} />
						{label}
					{/if}
				</Button>
			{/each}
			{#each technologies as { name, slug, color, logoColor = 'white' }}
				<img
					alt={slug}
					src={`https://img.shields.io/badge/-${encodeURIComponent(
						name
					)}-${color}?logo=${slug}&logoColor=${logoColor}&style=for-the-badge`}
				/>
			{/each}
		</Card>
	{/each}
</div>

