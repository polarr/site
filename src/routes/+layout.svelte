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
		DarkMode
	} from 'flowbite-svelte';

	import { Sun, Moon } from 'svelte-heros-v2';

	let theme = 'dark';

	const toggleTheme = () => {
		if (theme == 'dark') {
			theme = 'light';
		} else {
			theme = 'dark';
		}
	};
</script>

<div class="app">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="/mango_v3.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<div class="flex md:order-1">
			<DarkMode />
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl {hidden}>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/projects">Projects</NavLi>
			<NavLi href="/blog">Blog</NavLi>
			<NavLi href="/resume">Resume</NavLi>
		</NavUl>
	</Navbar>
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 1rem;
	}
</style>
