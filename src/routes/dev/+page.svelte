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

	import { Heading, P, Span, Hr } from 'flowbite-svelte';

	import Technologies from './Technologies.svelte';
</script>

<div class="max-w-2xl">
	<Heading tag="h1" customSize="text-5xl font-extrabold">Software Development</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I have a lot of experience with Fullstack Web Development—from frontend, UI and many rendering
		patterns, to APIs, servers and infrastructure, auth, cms, many DB paradigms, production architecture design
		and more.
	</P>
	<P weight="light" color="text-gray-500 dark:text-gray-400">
		Other than that, I sometimes like to render cool shaders with OpenGL. I can implement common
		rasterization, raytracing and raymarching algorithms as well as shadows and ambient occlusion,
		but there's still a lot for me to learn. I've also done some game development with p5.js and
		pygame in the past, and I plan to pick game dev back up soon.
	</P>
	<Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1" />
	<Heading tag="h4" customSize="text-4xl font-extrabold">Technologies</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		Some of the notable technologies I've worked with. Personal favorites are hearted!
	</P>

	<Technologies />
</div>
