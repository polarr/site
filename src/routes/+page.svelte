<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Github from '$lib/icons/Github.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import { SITE } from '$lib/config.js';
</script>

<svelte:head>
	<title>{SITE.name}</title>
	<meta property="og:url" content={SITE.url} />
	<meta property="og:title" content={SITE.name} />
	<meta property="og:description" content={SITE.description} />
	<meta property="og:type" content="profile" />
	<meta property="profile:first_name" content={SITE.owner.firstName} />
	<meta property="profile:last_name" content={SITE.owner.lastName} />
	<meta property="profile:username" content={SITE.owner.username} />
</svelte:head>

<div class="py-10">

	<!-- Profile header -->
	<div class="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8">
		<div class="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shrink-0 overflow-hidden">
			<!-- Casual shot (default) crossfades to the formal one on hover -->
			<img
				src="/charles.png"
				alt={SITE.owner.name}
				class="absolute inset-0 h-full w-full object-contain object-top transition-opacity duration-300 group-hover:opacity-0"
			/>
			<img
				src="/charles_formal.jpg"
				alt={SITE.owner.name}
				aria-hidden="true"
				class="absolute inset-0 h-full w-full object-contain object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			/>
		</div>
		<div class="flex flex-col gap-1.5 sm:pt-1">
			<h1 class="text-3xl font-display font-semibold text-foreground">{SITE.owner.name}</h1>
			<p class="text-sm text-muted-foreground">Undergraduate Student at UBC</p>
			<div class="flex items-center gap-3.5 mt-1.5">
				<a href="/redirect/github" aria-label="GitHub" class="text-muted-foreground hover:text-foreground transition-colors">
					<Github size={18} />
				</a>
				<a href="/redirect/linkedin" aria-label="LinkedIn" class="text-muted-foreground hover:text-foreground transition-colors">
					<LinkedIn size={18} />
				</a>
				<a href="/redirect/email" aria-label="Email" class="text-muted-foreground hover:text-foreground transition-colors">
					<Mail size={18} />
				</a>
			</div>
		</div>
	</div>

	<Separator class="mb-8" />

	<!-- Bio -->
	<div class="space-y-5 text-[0.925rem] leading-relaxed text-muted-foreground">
		<p>
			Hi! I'm <span class="text-foreground font-medium">Charles</span>, an undergrad at the
			<a href="https://ubc.ca" class="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">University of British Columbia</a>
			studying
			<a href="https://you.ubc.ca/ubc_programs/computer-science-vancouver-bsc/" class="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">Computer Science</a>
			and
			<a href="https://you.ubc.ca/ubc_programs/mathematics-vancouver-bsc/" class="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">Mathematics</a>.
		</p>
		<p>
            Currently, I'm working as a Machine Learning Research Intern on the LLM Reasoning team at <a href="https://github.com/huawei-noah" class="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">Huawei Canada's Noah's Ark Lab</a>. I focus on <span class="text-foreground font-medium">looped transformer architectures</span> for <span class="text-foreground font-medium">few-shot reasoning</span> and <span class="text-foreground font-medium">test-time adaptation</span>. I'm also doing research in <span class="text-foreground font-medium">extremal combinatorics</span>, proving extensions of Erdős–Ko–Rado type intersection theorems.
		</p>
        <p>
            On the side, I compete in competitive programming; I'm an <a href="https://icpc.cs.ubc.ca/team#2026" class="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">ICPC World Finalist</a> with the UBC team. I also run, read, and scroll a bit too much.
		</p>
	</div>

</div>
