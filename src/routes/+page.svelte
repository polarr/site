<script lang="ts">
	import { Heading, A, P, Button, Span, FooterIcon, Tooltip } from 'flowbite-svelte';
	import { DiscordBrand, EnvelopeSolid, GithubBrand, InstagramBrand, LinkedinBrand, SteamBrand, YoutubeBrand } from 'svelte-awesome-icons';
	import { copyText } from 'svelte-copy';
</script>

<svelte:head>
	<meta property="og:title" content="Home" />
	<meta property="og:description" content="Charles's personal website" />
	<meta property="og:type" content="profile" />
	<meta property="profile:first_name" content="Charles" />
	<meta property="profile:last_name" content="Ran" />
	<meta property="profile:username" content="polarity" />
</svelte:head>

<div class="my-auto text-center min-h-full">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl">
		<Span gradient>Charles Ran</Span>
	</Heading>
	<div class="flex space-x-6 mb-4 justify-center">
		<A href="/redirect/github" color="text-gray-400 hover:text-gray-900">
			<GithubBrand size="24"/>
		</A>
		<A href="/redirect/youtube" color="text-gray-400 hover:text-gray-900">
			<YoutubeBrand size="24"/>
		</A>
		<!--<A href="/redirect/instagram" color="text-gray-400 hover:text-gray-900">
			<InstagramBrand size="24" />
		</A>-->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span class="text-gray-400 hover:text-gray-900" on:click={async () => await navigator.clipboard.writeText('tropicomango')} >
			<DiscordBrand size="24" />
		</span>
		<Tooltip arrow={false}>
			@tropicomango
		</Tooltip>
		<A href="/redirect/steam" color="text-gray-400 hover:text-gray-900">
			<SteamBrand size="24"/>
		</A>
		<A href="/redirect/linkedin" color="text-gray-400 hover:text-gray-900">
			<LinkedinBrand size="24"/>
		</A>
		<A href="/redirect/email" color="text-gray-400 hover:text-gray-900">
			<EnvelopeSolid size="24"/>
		</A>
	</div>
	<Button href="/about" outline color="light">About Me</Button>
</div>
