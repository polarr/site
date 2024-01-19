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
			title: 'COMC Perfect Score, Champion',
			date: '2024 January',
			icon: TrophySolid
		},
		{
			title: 'CMS Olympiad Winter Camp Invitee',
			date: '2023 December',
			icon: TrophySolid,
			description:
				'Canadian MOP ✅'
		},
		{
			title: 'CSMC Student Champion',
			date: '2023 December',
			icon: TrophySolid,
			description:
				'Made up for last year'
		},
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
		},
		{
			title: 'Canadian IYPT Training Camp Invitee',
			date: '2023 April',
			icon: TrophySolid,
			description:
				'Placed Top 15 nationwide in the CaYPT'
		},
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
		},
		{
			title: 'Canadian Math Olympiad Top Quartile',
			date: '2022 March',
			icon: TrophySolid,
			description:
				"Score was CJMO Champion if I took that"
		},
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
		/**
		{
			title: 'AMC10 118.5',
			date: '2020 January',
			icon: MedalSolid,
			description: 'This first AMC10 attempt in 8th grade is my best...'
		}*/
	];
</script>

<div class="max-w-2xl py-8">
	<Heading tag="h1" customSize="text-5xl font-extrabold">Research</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I have many years of experience participating in <Span>Math Contests</Span> and <Span underline>Olympiads</Span>. If you know, A = N
		> C >> G. I occassionally post on my <A href="/blog">blog</A> about interesting problems. You
		can also find me on AoPS (where I rarely but sometimes post) as <A
			href="https://aops.com/community/user/polarity">polarity</A
		>. I founded <A href="https://mathetal.org">Math et al</A>, a nonprofit educational STEM initiative. We host many events, contests, and provide platforms and resources promoting the sciences.
	</P>
	<P weight="light" color="text-gray-500 dark:text-gray-400">
		I did some <Span>Physics Research</Span> for the
		<A href="https://www.caypt.org/">Canadian Young Physicists Tournament</A>. My focus was on fluid
		dynamics, researching phenomena relating to fractals patterns in ink droplets.
	</P>
	<Hr class="my-8" height="h-px" />

	<Heading tag="h4" customSize="text-4xl font-extrabold">Accolades</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		Some more notable achievements.
	</P>
	<div id="achievements" />
    <Achievements {achievements} />
</div>
