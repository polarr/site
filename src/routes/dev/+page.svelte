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
	<meta property="og:description" content="Polarity's software interests" />
</svelte:head>

<div class="max-w-2xl py-8">
	<Heading tag="h1" customSize="text-5xl font-extrabold">Software</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I'm currently exploring interests in Theoretical CS, Machine Learning, and Computer Graphics.
	</P>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I have many years of experience with <Span underline>Fullstack Web Development</Span> and <Span underline>System Administration</Span>, 
		<span class="font-normal">
			from frontend—UI, web frameworks, rendering patterns, design—to APIs, servers, auth, realtime, CMS,
			many DB paradigms, infrastructure design and more.
		</span>
	</P>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I participate in Competitive Programming. You can find me on <A href="/redirect/codeforces">Codeforces</A>, <A href="/redirect/dmoj">DMOJ</A> etc.
	</P>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		<!-- I'm also interested in <A href="https://cerxa.polarity.sh">Computer Graphics Rendering</A>, primarily with OpenGL/WebGL.  -->
        
        In the past, I did a lot of game development on the web, as well as with p5.js and with pygame.
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
		I'm currently working on <A href="https://volympiad.org">Virtual Olympiad</A>: Hosted platforms, APIs and tools for Science Olympiads.
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