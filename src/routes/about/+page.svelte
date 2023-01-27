<script lang="ts">
	import { Avatar, Badge, Button, ButtonGroup, Tooltip } from 'flowbite-svelte';

	import { Heading, P, Span, Hr } from 'flowbite-svelte';

	import { GithubBrand, DiscordBrand, YoutubeBrand } from 'svelte-awesome-icons';

	const aliases = ['TropicoMango', 'Polarity'];
</script>

<div class="flex items-center space-x-4">
	<Avatar src="/mango_v3.svg" rounded size="lg" />
	<div class="space-y-1 font-medium dark:text-white">
		<div class="flex items-center space-x-2">
			<Heading tag="h5">Mango</Heading>
			<Badge border color="dark">aka</Badge>
			<Tooltip>
				Also known as
				{#each aliases as alias, i}
					<span class="font-bold">{alias}</span>{i < aliases.length - 1 ? ', ' : ''}
				{/each}
			</Tooltip>
		</div>
		<div class="text-sm text-gray-500 dark:text-gray-400">@mango</div>
	</div>
</div>

<ButtonGroup size="xs" class="p-4">
	<Button>
		<GithubBrand size="15" />
	</Button>
	<Button>
		<YoutubeBrand size="15" />
	</Button>
	<Button>
		<DiscordBrand size="15" />
	</Button>
</ButtonGroup>

<div class="max-w-2xl">
	<P class="my-4" align="center" weight="light" color="text-gray-500 dark:text-gray-400">
		Hello! I'm
		<Span class="font-black" gradient>Mango</Span>, a
		<Span underline>Software Engineer</Span>
		and
		<Span underline>Math enthusiast</Span> residing in Canada. I mainly focus on
		<Span underline decorationClass="decoration-green-500 decoration-dotted">
			Fullstack Web Development
		</Span>
		but also occassionally dabble in Computer Graphics and Game Development. I also participate in
		<Span underline decorationClass="decoration-green-500 decoration-dotted">Math Olympiads</Span> and
		Competitive Programming.
	</P>
	<P align="center" weight="light" color="text-gray-500 dark:text-gray-400">
		I enjoy sports, listening to music, video games, and reading light novels in my free time.
	</P>
	<Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1" />
</div>
