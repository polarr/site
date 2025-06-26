<script lang="ts">
	import { Card, Button, Toggle, Badge, Hr, Secondary, Heading, P, A, Span } from 'flowbite-svelte';
	import { GithubBrand } from 'svelte-awesome-icons';

	// red = frontend, purple = backend, yellow = service, green = runtime / language
	const projects: App.Project[] = [
		{
			title: 'Virtual Olympiad',
			subtitle: 'Science Olympiad Platform & APIs',
			description: 'Hosted platforms, APIs and tools for Science Olympiads. VODB maintains a massive schemaful database of indexed contest problems, fully categorized. VOJ hosts a community platform and an online judge. Arena allows users to create public/private multiplayer contest lobbies with computer-generated problemsets to compete with friends. Rounds are given extensive customizability in format (normal, teams, relay), time controls, difficulty, and more.',
			imageSrc: '/projects/voly.png',
			link: "https://volympiad.org",
			links: [
				{
					icon: GithubBrand,
					label: 'View on Github',
					href: 'https://github.com/virtual-olympiad/'
				}
			],
			technologies: [
				{
					name: 'SvelteKit',
					color: 'red'
				},
                {
					name: 'React',
					color: 'red'
				},
				{
					name: 'Tailwind',
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
					name: 'Supabase',
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
			subtitle: 'Web Computer Graphics Engine',
			description: 'Custom P5.js and WebGL Graphics Engines implemented from scratch in GLSL, supporting Rasterization and Volumetric Raytracing. Features ambient, diffuse and specular lighting, hard shadows, a dynamic camera system and support for distance-estimated fractal rendering.',
			imageSrc: '/projects/cerxa.png',
			link: 'https://cerxa.polarity.sh',
			links: [
				{
					icon: GithubBrand,
					label: 'View on GitHub',
					href: 'https://github.com/polarr/cerxa'
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
			title: 'UBC ICPC',
			subtitle: 'Official University ICPC Site',
            //evelop club website using Cloudflare, SvelteKit, TailwindCSS, ShadCN UI. Self-host club infrastructure with Docker and populate dynamic content in SQLite database
			description: 'Professional website for the official University of British Columbia ICPC competitive programming team and club with custom modern UI elements and interactivity. The backend features a dynamic authenticated CMS with backup redudancy, built on SQLite and self-hosted with Docker.',
			imageSrc: '/projects/ubc-icpc.png',
			link: 'https://icpc.cs.ubc.ca',
			links: [
				{
					icon: GithubBrand,
					label: 'View on GitHub',
					href: 'https://github.com/polarr/ubc-icpc'
				}
			],
			technologies: [
				{
					name: 'SvelteKit',
					color: 'red'
				},
                {
					name: 'Figma',
					color: 'red'
				},
				{
					name: 'Tailwind',
					color: 'red'
				},
                {
					name: 'SQLite',
					color: 'purple'
				},
                {
					name: 'Docker',
					color: 'purple'
				},
                {
					name: 'Linux',
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
			title: 'Sap',
			subtitle: 'Java Pathtracing Engine',
			description: 'Highly modular and robust Java raytracing engine specifically built for educational purposes. It is written "completely mathematically from scratch" and aims to provide a clear and extensible foundation for experimenting with a wide range of common rendering techniques and features. Includes custom geometry, lighting models, a dynamic camera system, hardware acceleration, and data persistence.',
			imageSrc: '/projects/sap.png',
			links: [
				{
					icon: GithubBrand,
					label: 'View on GitHub',
					href: 'https://github.com/polarr/sap'
				}
			],
			technologies: [
				{
					name: 'Java Swing',
					color: 'red'
				},
				{
					name: 'JUnit',
					color: 'yellow'
				},
				{
					name: 'Maven',
					color: 'green'
				},
				{
					name: 'Java',
					color: 'green'
				}
			]
		},/*
		{
			title: 'Rudis',
			subtitle: 'Highly Modular Realtime Game Server',
			description: 'Robust realtime game server supporting highly modular procedural game logic. Built for websocket, supports function triggers and transactional database integration.',
			imageSrc: '/projects/aesthete.png',
			links: [
				{
					icon: GithubBrand,
					label: 'Closed Source',
					href: 'https://github.com/virtual-olympiad/aesthete'
				}
			],
			technologies: [
				
			]
		},*/
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
			title: 'Aesthete',
			subtitle: 'Batteries-Included Math Parser & API Wrapper',
			description: 'Typescript HTML parser module supporting TeX in the web, allowing conversion to an intermediate HTML/TeX-like language for rich full-text search and rendering to KaTeX/MathML. Also an API wrapper for the Art of Problem Solving Website.',
			imageSrc: '/projects/aesthete.png',
			links: [
				{
					icon: GithubBrand,
					label: 'View on GitHub',
					href: 'https://github.com/virtual-olympiad/aesthete'
				}
			],
			technologies: [
				{
					name: 'NPM',
					color: 'red'
				},
				{
					name: 'Got',
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
					name: 'Typescript',
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
		One thing I'm currently working on with some collaborators is <A href="https://volympiad.org">Virtual Olympiad</A>: Hosted platforms, APIs and tools for Science Olympiads. I'm also looking into Machine Learning models and Computer Graphics rendering techniques.
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