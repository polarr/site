<script lang="ts">
	import '../app.postcss';
	import '../app.scss';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		Button,
		DropdownDivider,
		DarkMode,
		Footer,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon,
		FooterCopyright
	} from 'flowbite-svelte';

	import { GithubBrand, DiscordBrand, YoutubeBrand, InstagramBrand, SteamBrand, EnvelopeSolid } from 'svelte-awesome-icons';
</script>

<!-- SEO -->
<svelte:head>
	<meta property="og:site_name" content="polarity" />
</svelte:head>

<div class="app relative flex flex-col h-screen">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="/mango_v3.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
		</NavBrand>
		<div class="flex md:order-1">
			<DarkMode />
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl {hidden}>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/dev">Dev</NavLi>
			<NavLi href="/research">Research</NavLi>
			<NavLi href="/projects">Projects</NavLi>
			<NavLi href="/blog">Blog</NavLi>
			<NavLi href="/redirect/resume">Resume</NavLi>
		</NavUl>
	</Navbar>
	<div class="grow overflow-auto">
		<main class="flex flex-col p-4 items-center w-full min-h-full h-fit">
			<slot />
		</main>
		<Footer class="p-6">
			<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2020-{new Date().getFullYear()} • Last Updated 2024-3-13
			</span>
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<FooterIcon href="/redirect/github" class="text-gray-400 hover:text-gray-900">
					<GithubBrand size="20"/>
				</FooterIcon>
				<FooterIcon href="/redirect/youtube" class="text-gray-400 hover:text-gray-900">
					<YoutubeBrand size="20"/>
				</FooterIcon>
				<!--<FooterIcon href="/redirect/instagram" class="text-gray-400 hover:text-gray-900">
					<InstagramBrand size="20"/>
				</FooterIcon>
				-->
				<FooterIcon href="/redirect/discord" class="text-gray-400 hover:text-gray-900">
					<DiscordBrand size="20"/>
				</FooterIcon>
				<FooterIcon href="/redirect/steam" class="text-gray-400 hover:text-gray-900">
					<SteamBrand size="20"/>
				</FooterIcon>
				<FooterIcon href="/redirect/email" class="text-gray-400 hover:text-gray-900">
					<EnvelopeSolid size="20"/>
				</FooterIcon>
			</div>
		</Footer>
	</div>
</div>