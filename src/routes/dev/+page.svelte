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

<div class="max-w-2xl py-8">
	<Heading tag="h1" customSize="text-5xl font-extrabold">Software</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I have a lot of experience with <Span underline>Fullstack Web Development</Span>—
		<span class="font-normal">
			from frontend, UI and many rendering patterns, to APIs, servers and infrastructure, auth, cms,
			many DB paradigms, production architecture design and more.
		</span>
	</P>
	<P weight="light" color="text-gray-500 dark:text-gray-400">
		Other than that, I sometimes like to <Span
			>render cool <A href="/redirect/shadertoy">shaders</A></Span
		> with OpenGL. I can implement common rasterization, raytracing and raymarching algorithms as well
		as shadows and ambient occlusion, but there's still a lot for me to learn. I've also done some game
		development with p5.js and pygame. I'm currently working on from-scratch physics and rendering engine optimized in rust.
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
		I'm currently working on <A href="https://voly.mathetal.org">VOLY</A>, a platform to host
		multiplayer contest math practice, and <A href="https://vodb.mathetal.org">VODB</A>, a massive
		database of contest problems.

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
