<script lang="ts">
	import { Heading, A, P, Button, Span, FooterIcon } from 'flowbite-svelte';
	import { DiscordBrand, EnvelopeSolid, GithubBrand, InstagramBrand, SteamBrand, YoutubeBrand } from 'svelte-awesome-icons';
</script>

<div class="my-auto text-center min-h-full">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl">
		<Span gradient>Polarity</Span>
	</Heading>
	<div class="flex space-x-6 mb-4 justify-center">
		<A href="/redirect/github" color="text-gray-400 hover:text-gray-900">
			<GithubBrand size="24"/>
		</A>
		<A href="/redirect/youtube" color="text-gray-400 hover:text-gray-900">
			<YoutubeBrand size="24"/>
		</A>
		<A href="/redirect/instagram" color="text-gray-400 hover:text-gray-900">
			<InstagramBrand size="24" />
		</A>
		<A href="/redirect/discord" color="text-gray-400 hover:text-gray-900">
			<DiscordBrand size="24"/>
		</A> 
		<A href="/redirect/steam" color="text-gray-400 hover:text-gray-900">
			<SteamBrand size="24"/>
		</A>
		<A href="/redirect/email" color="text-gray-400 hover:text-gray-900">
			<EnvelopeSolid size="24"/>
		</A>
	</div>
	<Button href="/about" outline color="light">About Me</Button>
</div>
