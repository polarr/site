<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Achievements from './Achievements.svelte';

	import { SITE } from '$lib/config.js';

	const achievements: App.Achievement[] = [
		{ title: '11th Place, ICPC NA Championship', date: '2026 March' },
		{ title: '3rd Place, ICPC NA West Regional', date: '2025 November' },
		{ title: 'Putnam Competition Top 200', date: '2024 December' },
		{ title: 'Canadian Open Math Competition Champion', date: '2023 October' }
	];
</script>

<svelte:head>
	<title>Research | {SITE.name}</title>
	<meta property="og:url" content="{SITE.url}/research" />
	<meta property="og:title" content="Research | {SITE.name}" />
	<meta property="og:description" content="{SITE.owner.name}'s research." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="py-8">
	<h1 class="text-4xl font-display font-semibold text-foreground">Research</h1>

	<Separator class="my-6" />

	<h2 class="text-xl font-serif font-medium text-foreground mb-3">Machine Learning</h2>
	<p class="my-4 text-[0.925rem] text-muted-foreground leading-relaxed">
        I'm broadly interested in <span class="text-foreground font-medium">Deep Learning</span>, particularly foundational architecture research and deep representation learning. Currently, I'm working on <span class="text-foreground font-medium">looped transformer architectures</span> for <span class="text-foreground font-medium">few-shot reasoning</span> and <span class="text-foreground font-medium">test-time adaptation</span>.
	</p>

    <Separator class="my-6" />

	<h2 class="text-xl font-serif font-medium text-foreground mb-3">Mathematics</h2>
	<p class="my-4 text-[0.925rem] text-muted-foreground leading-relaxed">
		I'm primarily interested in <span class="text-foreground font-medium">Combinatorics</span>, with a secondary interest in <span class="text-foreground font-medium">Number Theory</span>. Currently, I'm working on proving extensions of Erdős–Ko–Rado type intersection theorems.
	</p>

    <Separator class="my-6" />

	<h2 class="text-xl font-serif font-medium text-foreground mb-3">Publications</h2>
	<p class="my-4 text-muted-foreground leading-relaxed text-sm italic">Coming very soon! ;)</p>

    <!-- <Separator class="my-6" />

	<p class="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">Official Coursework</p>
	<ul class="text-sm list-disc list-outside ml-5 space-y-0.5 text-muted-foreground">
		<li>Multivariate Calculus</li>
        <li>Differential Equations</li>
		<li>Linear, Group, Ring, and Module Algebra</li>
		<li>Real and Complex Analysis</li>
		<li>Number Theory</li>
		<li>Graph Theory</li>
		<li>Algorithm Design and Data Structures</li>
		<li>Advanced Machine Learning</li>
		<li>Theory of Computation</li>
	</ul> -->
</div>
