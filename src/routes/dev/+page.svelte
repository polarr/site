<script lang="ts">
	import {
		Avatar,
		Badge,
		Button,
		ButtonGroup,
		Tooltip,
		Tabs,
		TabItem,
		Indicator
	} from 'flowbite-svelte';

	import { Heading, A, P, Span, Hr } from 'flowbite-svelte';
	import { ArrowRightSolid } from 'svelte-awesome-icons';

	import Technologies from './Technologies.svelte';
</script>

<!-- SEO -->
<svelte:head>
	<meta property="og:title" content="Dev" />
	<meta property="og:description" content="Charles' software interests" />
</svelte:head>

<div class="max-w-2xl py-8">
	<Heading tag="h1" customSize="text-5xl font-extrabold">Software</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I am broadly interested in <Span>Deep Learning</Span> and <Span>Algorithm Design</Span>.
	</P>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I participate in Competitive Programming. I am a ICPC World Finalist for the <A href="https://icpc.cs.ubc.ca/team#2026">UBC team</A>, and you can find me on <A href="/redirect/codeforces">Codeforces</A> and some <A href="https://clist.by/coder/polarity/">other platforms</A>.
	</P>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I also have lots of experience with <Span>Fullstack Web Development</Span>: web frameworks, UI design, APIs, servers, auth, realtime, many DB paradigms, infrastructure design and more.
	</P>
	<Hr class="my-8" height="h-px" />
	<Heading tag="h4" customSize="text-4xl font-extrabold">Technologies</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		Some of the notable technologies I've worked with. Personal favorites are hearted!
	</P>

	<Technologies />
	<Hr class="my-8" height="h-px" />
	<Heading tag="h4" customSize="text-4xl font-extrabold">Projects</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I have developed many software projects for fun. 
        
        <!-- I'm currently working on <A href="https://volympiad.org">Virtual Olympiad</A>: Hosted platforms, APIs and tools for Science Olympiads. -->
		<A
			href="/projects"
			textColor="text-blue-600 dark:text-blue-500"
			aClass="inline-flex spacing gap-x-1 items-center font-medium  hover:underline"
		>
			View my projects
			<ArrowRightSolid size="16" />
		</A>
	</P>
</div>