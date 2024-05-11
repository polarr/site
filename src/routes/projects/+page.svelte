<script lang="ts">
	import { Card, Button, Toggle, Badge, Hr, Secondary, Heading, P, A, Span } from 'flowbite-svelte';
	import { GithubBrand } from 'svelte-awesome-icons';

	// red = frontend, purple = backend, yellow = service, green = runtime / language
	const projects: App.Project[] = [
		{
			title: 'Virtual Olympiad',
			subtitle: 'Online Math Platform',
			description: 'Massive online platform and services for the contest math community. VODB maintains a schemafull, open-source and well documented database of contest problems with a user and community system and an online judge. VOLY allows users to host public/private multiplayer contest lobbies with computer-generated problemsets to compete and/or practice. Rounds are given extensive customizability in format (normal, teams, relay), time controls, difficulty, and more.',
			imageSrc: '/projects/voly.png',
			link: "https://voly.mathetal.org",
			links: [
				{
					icon: GithubBrand,
					label: 'View on Github',
					href: 'https://github.com/virtual-olympiad/voly'
				}
			],
			technologies: [
				{
					name: 'SvelteKit',
					color: 'red'
				},
				{
					name: 'Carbon Design',
					color: 'red'
				},
				{
					name: 'SASS',
					color: 'red'
				},
				{
					name: 'WebSocket',
					color: 'purple'
				},
				{
					name: 'Express',
					color: 'purple'
				},
				{
					name: 'Firebase',
					color: 'purple'
				},
				{
					name: 'Cheerio',
					color: 'purple'
				},
				{
					name: 'Katex',
					color: 'purple'
				},
				{
					name: 'Docker',
					color: 'purple'
				},
				{
					name: 'Cloudflare',
					color: 'yellow'
				},
				{
					name: 'Node',
					color: 'green'
				},
				{
					name: 'Typescript',
					color: 'green'
				}
			]
		},
		{
			title: 'CERXA',
			subtitle: 'Computer Graphics Engine',
			description: 'Custom P5.js and WebGL Graphics Engines implemented from scratch supporting Rasterization and Volumetric Raytracing. Features ambient, diffuse and specular lighting, hard shadows, a dynamic camera system and support for distance-estimated fractal rendering.',
			imageSrc: '/projects/cerxa.png',
			link: 'https://cerxa.polarity.sh',
			links: [
				{
					icon: GithubBrand,
					label: 'View on GitHub',
					href: 'https://github.com/polarr/graphics'
				}
			],
			technologies: [
				{
					name: 'WebGL',
					color: 'red'
				},
				{
					name: 'P5.js',
					color: 'red'
				},
				{
					name: 'HTML/CSS',
					color: 'red'
				},
				{
					name: 'Shadertoy',
					color: 'yellow'
				},
				{
					name: 'GLSL',
					color: 'green'
				},
				{
					name: 'Javascript',
					color: 'green'
				}
			]
		},
		{
			title: 'BrawlTrack',
			subtitle: 'Statistics Tracker',
			description: 'Progression statistics tracker for the mobile game Brawl Stars. Server periodically fetches and stores Brawl Stars public API data in MongoDB, calculating progression changes to be displayed in a custom game-esque UI. Used by 10+ esports organizations with over 4000 total players.',
			imageSrc: '/projects/brawltrack.png',
			links: [
				{
					icon: GithubBrand,
					label: 'View on GitHub',
					href: 'https://github.com/polarr/brawltrack'
				}
			],
			technologies: [
				{
					name: 'Embedded JS',
					color: 'red'
				},
				{
					name: 'HTML/CSS',
					color: 'red'
				},
				{
					name: 'Express',
					color: 'purple'
				},
				{
					name: 'MongoDB',
					color: 'purple'
				},
				{
					name: 'Nodemailer',
					color: 'purple'
				},
				{
					name: 'Axios',
					color: 'purple'
				},
				{
					name: 'Cron Job',
					color: 'purple'
				},
				{
					name: 'Proxy',
					color: 'purple'
				},
				{
					name: 'Node',
					color: 'green'
				},
				{
					name: 'Javascript',
					color: 'green'
				}
			]
		},
		{
			title: 'Minesweeper Battles',
			subtitle: 'Multiplayer Online Game',
			description: 'Online minesweeper with a multiplayer twist. Host public/private games and face off in live minesweeper, solving the same board side-by-side where you can partially observe your opponents\' progress. Clicking a bomb will get penalized with a time freeze for a short duration.',
			imageSrc: '/projects/minesweeper.png',
			links: [
				{
					icon: GithubBrand,
					label: 'View on GitHub',
					href: 'https://github.com/polarr/minesweeper-battles'
				}
			],
			technologies: [
				{
					name: 'P5.js',
					color: 'red'
				},
				{
					name: 'HTML/CSS',
					color: 'red'
				},
				{
					name: 'jQuery',
					color: 'red'
				},
				{
					name: 'Express',
					color: 'purple'
				},
				{
					name: 'WebSocket',
					color: 'purple'
				},
				{
					name: 'Node',
					color: 'green'
				},
				{
					name: 'Javascript',
					color: 'green'
				}
			]
		},
		{
			title: 'Vires',
			subtitle: 'Fractal Analysis Software',
			description: 'Image processing pipeline and algorithm suite for fractal analysis. Developed for research purposes in the Canadian Young Physicists Tournament, Vires uses Julia and OpenCV to analyze images of real-world fractal phenomena. The pipeline can also be implemented in ImageJ.',
			imageSrc: '/projects/vires.png',
			links: [
				{
					icon: GithubBrand,
					label: 'View on GitHub',
					href: 'https://github.com/polarr/vires'
				}
			],
			technologies: [
				{
					name: 'Plots',
					color: 'red'
				},
				{
					name: 'OpenCV',
					color: 'purple'
				},
				{
					name: 'Julia',
					color: 'green'
				}
			]
		}
	];
</script>

<!-- SEO -->
<svelte:head>
	<meta property="og:title" content="Projects" />
	<meta property="og:description" content="Polarity's featured projects" />
</svelte:head>

<div>
	<Heading tag="h3" class="my-4">
		Featured Projects
	</Heading>
	<P class="mb-4" weight="light" color="text-gray-500 dark:text-gray-400 max-w-2xl">
		I'm currently working on <A href="https://voly.mathetal.org">Virtual Olympiad</A>, a platform to host
		multiplayer contest math practice built upon <A href="https://vodb.mathetal.org">VODB</A>, a massive
		database of contest problems.
	</P>
	<P weight="light" color="text-gray-500 dark:text-gray-400">
		See my <A href="/redirect/github"><Span underline>Github Page</Span></A> for all public projects.
	</P>
	<Hr class="mb-8" height="h-px" />
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
		{#each projects as { title, subtitle = "", description, link, links, imageSrc, technologies }, i}
			<Card size="lg" padding="md" class="max-h-min">
				<img src={imageSrc} alt={title + ": " + subtitle} class="mb-4 h-40 object-cover" />
				<Heading tag="h4" customSize="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title} <Secondary class="ms-2">{ subtitle }</Secondary>
				</Heading>
				<P weight="light" class="mb-auto" color="text-gray-700 dark:text-gray-300 leading-tight">
					{@html description}
				</P>
				<div class="mt-3">
					{#each technologies as { name, color = 'dark'}}
						<Badge color={color} class="mr-1">
							{name}
						</Badge>
					{/each}
				</div>
				<Hr class="my-4" height="h-px" />
				<div class="flex">
					{#each links as { icon, label, href, iconRight = false }, j}
						<Button size="sm" {href} color="light">
							{#if iconRight}
								{label}
								<svelte:component class="w-3.5 h-3.5 ms-2" this={icon} />
							{:else}
								<svelte:component class="w-3.5 h-3.5 me-2" this={icon} />
								{label}
							{/if}
						</Button>
					{/each}
					{#if link}
						<Button class="ml-auto" size="sm" href={link} color="blue">
							Visit Application
						</Button>
					{/if}
				</div>
			</Card>
		{/each}
	</div>
</div>