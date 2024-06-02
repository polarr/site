<script lang="ts">
	import {
		Avatar,
		Badge,
		Button,
		ButtonGroup,
		Tooltip,
		Tabs,
		TabItem,
		Indicator,
		Timeline,
		TimelineItem
	} from 'flowbite-svelte';

	import { Heading, A, P, Span, Hr } from 'flowbite-svelte';
	import {
		ArrowRightSolid,
		CheckSolid,
		MedalSolid,
		StarSolid,
		TrophySolid
	} from 'svelte-awesome-icons';

	import Achievements from './Achievements.svelte';

	const achievements: App.Achievement[] = [
		{
			title: 'COMC Champion',
			date: '2024 January',
			icon: TrophySolid
		},/**
		{
			title: 'CMS Olympiad Winter Camp Invitee',
			date: '2023 December',
			icon: TrophySolid,
			description:
				'Canadian MOP'
		},*/
		{
			title: 'CSMC Champion',
			date: '2023 December',
			icon: TrophySolid,
			description:
				'Sillied this award the year before'
		},/**
		{
			title: 'AMC12 130.5',
			date: '2023 November',
			icon: MedalSolid,
			description:
				'Rip leaks'
		},
		{
			title: '1570 on the SAT',
			date: '2023 May',
			icon: CheckSolid,
		},
		{
			title: '5 on Physics C: E&M',
			date: '2023 May',
			icon: CheckSolid
		},
		{
			title: '5 on Physics C: Mechanics',
			date: '2023 May',
			icon: CheckSolid
		},**/
		{
			title: 'IYPT Physics World Cup Canadian Training Camp',
			date: '2023 April',
			icon: TrophySolid,
			description:
				'Top 15 nationwide in the CaYPT'
		},/**
		{
			title: 'Ontario Math Competition Champion',
			date: '2023 March',
			icon: MedalSolid,
		},
		{
			title: '2x Canadian Math Olympiad Qualifier',
			date: '2023 February',
			icon: MedalSolid,
		},
		{
			title: 'CSMC Group II',
			date: '2022 November',
			icon: MedalSolid,
			description:
				'Sillied part A, or would\'ve been Group I'
		},
		{
			title: 'AMC12 123',
			date: '2022 November',
			icon: MedalSolid,
			description:
				'3 points away from DHR'
		},
		{
			title: 'NanoMath FMM 2nd Place',
			date: '2022 October',
			icon: MedalSolid
		},
		{
			title: 'CMS Summer Olympiad Training Camp Invitee',
			date: '2022 August',
			icon: TrophySolid
		},*/
		{
			title: 'Canadian Math Olympiad Top Quartile',
			date: '2022 March',
			icon: TrophySolid,
			description:
				"Score was CJMO Champion if I took that"
		},/**
		{
			title: '5 on AP Calc BC',
			date: '2021 May',
			icon: CheckSolid
		},
		{
			title: 'AIME 8/15',
			date: '2021 March',
			icon: MedalSolid
		},
		{
			title: 'AMC10 118.5',
			date: '2020 January',
			icon: MedalSolid,
			description: 'This first AMC10 attempt in 8th grade is my best...'
		}*/
	];
</script>

<!-- SEO -->
<svelte:head>
	<meta property="og:title" content="Research" />
	<meta property="og:description" content="Polarity's academic interests" />
</svelte:head>

<div class="max-w-2xl py-8">
	<Heading tag="h1" customSize="text-5xl font-extrabold">Research</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		Currently studying a wide range of mathematical interests in Linear Algebra, Analysis, and Algebraic Number Theory.
	</P>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I recently resumed <Span underline>Competitive Programming</Span>. You can find me on <A href="/redirect/codeforces">Codeforces</A>, <A href="/redirect/dmoj">DMOJ</A> and various other platforms.
	</P>
	<Heading tag="h2" customSize="text-2xl font-extrabold">Past Work</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I did a small bit of <Span>Physics Research</Span> for the
		<A href="https://www.caypt.org/">Canadian Young Physicists Tournament</A>. My focus was on fluid
		dynamics, researching phenomena relating to fractals patterns in alcohol-ink droplets.
	</P>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I used to participate in <Span underline>Math Olympiads</Span>. My subtopic preference was A > C = N >>> G (severe geo weakness was pretty costly in IMO attempt). You can find me on AoPS (where I rarely post) as <A
			href="https://aops.com/community/user/polarity">polarity</A
		>. In high school, I ran <A href="https://mathetal.org">Math et al</A> and was part of <A href="https://www.ontariocmc.ca/">OCMC</A>, both nonprofit educational STEM initiatives.
	</P>
	<!--<Hr class="my-8" height="h-px" />-->
	<Heading tag="h3" customSize="text-2xl font-extrabold">Past Achievements</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		Most notable achievements:
	</P>
	<div id="achievements" />
    <Achievements {achievements} />-->
</div>
