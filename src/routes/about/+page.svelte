<script lang="ts">
	import { Avatar, Badge, Button, ButtonGroup, Li, List, Tooltip } from 'flowbite-svelte';

	import { copyText } from 'svelte-copy';

	import { Heading, P, A, Span, Hr } from 'flowbite-svelte';

	import {
		GithubBrand,
		DiscordBrand,
		YoutubeBrand,
		CircleSolid,
		InstagramBrand,
		EnvelopeSolid,
		SteamBrand,
		ArrowUpRightFromSquareSolid,

		LinkedinBrand

	} from 'svelte-awesome-icons';

	const aliases = ['TropicoMango', 'Mango', '1egend'];
</script>

<!-- SEO -->
<svelte:head>
	<meta property="og:title" content="About" />
	<meta property="og:description" content="About polarity" />
	<meta property="og:type" content="profile" />
	<meta property="profile:first_name" content="Charles" />
	<meta property="profile:last_name" content="Ran" />
	<meta property="profile:username" content="polarity" />
</svelte:head>

<div class="my-auto flex flex-col justify-center items-center">
	<div class="flex items-center space-x-4">
		<Avatar src="/mango_v3.svg" rounded size="lg" />
		<div class="space-y-1 font-medium dark:text-white">
			<div class="flex items-center space-x-2">
				<Heading tag="h5">Charles Ran</Heading>
				<Badge border color="dark">aka</Badge>
				<Tooltip>
					Also known as
					{#each aliases as alias, i}
						<span class="font-bold">{alias}</span>{i < aliases.length - 1 ? ', ' : ''}
					{/each}
				</Tooltip>
			</div>
			<div class="text-sm text-gray-500 dark:text-gray-400">@polarity</div>
		</div>
	</div>

	<ButtonGroup size="xs" class="m-4">
		<Button href="/redirect/github">
			<GithubBrand size="15" />
		</Button>
		<Button on:click={() => copyText('tropicomango')}>
			<DiscordBrand size="15" />
		</Button>
		<Tooltip>
			@tropicomango
		</Tooltip>
		<Button href="/redirect/youtube">
			<YoutubeBrand size="15" />
		</Button>
		<!--
		<Button href="/redirect/instagram">
			<InstagramBrand size="15" />
		</Button>
		-->
		<Button href="/redirect/steam">
			<SteamBrand size="15" />
		</Button>
		<Button href="/redirect/linkedin">
			<LinkedinBrand size="15" />
		</Button>
		<Button href="/redirect/email">
			<EnvelopeSolid size="15" />
		</Button>
	</ButtonGroup>

	<div class="max-w-2xl">
		<P class="my-4" align="center" weight="light" color="text-gray-500 dark:text-gray-400">
			I'm
			<Span class="font-black" gradient>Polarity</Span>, a first-year undergraduate at the University of British Columbia studying 
			<A href="/dev"><Span underline>Computer Science</Span></A> and <A href="/research"><Span>Management</Span></A>, with a heavy interest in <A href="/research"><Span underline>Math</Span></A>. I specialize in
			<Span underline decorationClass="decoration-green-500 decoration-dotted">
				Fullstack Web Development
			</Span>
			but also dabble in Theoretical CS, System Administration, Computer Graphics, and Artificial Intelligence. I used to participate in
			Math Olympiads.
		</P>
		<P align="center" weight="light" color="text-gray-500 dark:text-gray-400">
			I enjoy running, tennis, weight training, music, games, and reading in my free time.
		</P>
		<Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1" />
		<!--
		<List
			tag="ul"
			list="none"
			ulClass="flex flex-wrap justify-center items-center mb-6 gap-2 md:gap-4"
		>
			<Li>
				<A
					href="https://mathetal.org"
					textColor="text-gray-700 dark:text-white"
					aClass="inline-flex items-center hover:underline"
				>
					Math et al
					<ArrowUpRightFromSquareSolid class="ml-2" size="16" />
				</A>
			</Li>
			<CircleSolid class="text-gray-300 dark:text-gray-500" size="6" />
			<Li>
				<A
					href="/research#achievements"
					class="hover:underline"
					textColor="text-gray-700 dark:text-white">Contest Achievements</A
				>
			</Li>
			<CircleSolid class="text-gray-300 dark:text-gray-500" size="6" />
			<Li>
				Hobbies
			</Li>
			<CircleSolid class="text-gray-300 dark:text-gray-500" size="6" />
			<Li>
				FAQs
			</Li>
			
			<Li>
				<A href="/faq#hobbies" class="hover:underline" textColor="text-gray-700 dark:text-white"
					>Hobbies</A
				>
			</Li>
			<CircleSolid class="text-gray-300 dark:text-gray-500" size="6" />
			<Li>
				<A href="/faq" class="hover:underline" textColor="text-gray-700 dark:text-white">FAQs</A>
			</Li>
		</List>
		-->
	</div>
</div>
