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
			title: 'CaYPT National Camp Invitee',
			date: '2023 May',
			icon: TrophySolid
		},
		{
			title: 'OMC First Place',
			date: '2023 April',
			icon: MedalSolid,
			description:
				'Glad to have participated in the first year it ran. Did you know OMC all started from a half-joking battle declaration email to the math club of a different school?'
		},
		{
			title: 'Almost CSMC Group I',
			date: '2022 November',
			icon: MedalSolid,
			description:
				'Sillied a part A question, now group II.'
		},
		{
			title: 'Almost AMC12 DHR',
			date: '2022 November',
			icon: MedalSolid,
			description:
				'3 points away...'
		},
		{
			title: 'NanoMath FMM Team Rank 2',
			date: '2022 October',
			icon: MedalSolid,
			description:
				'Fun team contest done with friends. One problem away from first place over a team of MOP contestants!'
		},
		{
			title: 'Canadian Math Olympiad Top 20',
			date: '2022 March',
			icon: TrophySolid,
			description:
				"Solved P1 and P3. Heavily lacked Olympiad NT and failed P2. Honestly surprised by the relatively high placement."
		},
		{
			title: '5 on AP Calc BC',
			date: '2021 May',
			icon: CheckSolid
		},
		{
			title: 'AIME 8/15',
			date: '2021 March',
			icon: MedalSolid,
			description: 'Pretty decent for 9th grade.'
		},
		{
			title: 'AMC10 118.5',
			date: '2020 January',
			icon: MedalSolid,
			description: 'Pretty good for 8th grade, my first AMC10 attempt!'
		}
	];
</script>

<div class="max-w-2xl py-8">
	<Heading tag="h1" customSize="text-5xl font-extrabold">Research</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		I have many years of experience participating in <Span>Math Contests</Span> and <Span underline>Olympiads</Span>. If you know, A = N
		> C >>>>> G. Sometimes I post on my <A href="/blog">blog</A> about interesting problems. You
		can also find me on AoPS (where I rarely but sometimes post) as <A
			href="https://aops.com/community/user/polarity">polarity</A
		>. I founded <A href="https://mathetal.org">Math et al</A>, a nonprofit science organization. We have an
		active community and host many events, contests, and resources promoting the sciences.
	</P>
	<P weight="light" color="text-gray-500 dark:text-gray-400">
		I also did some <Span>Physics Research</Span> for the
		<A href="https://www.caypt.org/">Canadian Young Physicists Tournament</A>. My focus was on fluid
		dynamics, researching fluid phenomena relating to fractals.
	</P>
	<Hr class="my-8" height="h-px" />

	<Heading tag="h4" customSize="text-4xl font-extrabold">Accolades</Heading>
	<P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
		Some notable achievements.
	</P>

    <Achievements {achievements} />
</div>
