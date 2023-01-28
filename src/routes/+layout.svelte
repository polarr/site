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
			<NavLi href="/projects">Research</NavLi>
			<NavLi href="/projects">Projects</NavLi>
			<NavLi href="/blog">Blog</NavLi>
			<NavLi href="/resume">Resume</NavLi>
		</NavUl>
	</Navbar>
	<div class="grow overflow-scroll">
		<main class="min-h-fit">
			<slot />
		</main>
		<Footer class="p-6">
			<FooterCopyright href="/" by="Polarity" copyrightMessage="Last Updated 2023-1-27" />
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
					<GithubBrand size="20"/>
				</FooterIcon>
				<FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
					<YoutubeBrand size="20"/>
				</FooterIcon>
				<FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
					<DiscordBrand size="20"/>
				</FooterIcon>
				<FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
					<SteamBrand size="20"/>
				</FooterIcon>
				<FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
					<EnvelopeSolid size="20"/>
				</FooterIcon>
			</div>
		</Footer>
	</div>
</div>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 1rem;
	}
</style>
