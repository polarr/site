<script lang="ts">
	import { Timeline, TimelineItem } from 'flowbite-svelte';

	export let achievements: App.Achievement[];
</script>

<Timeline customClass="max-h-10 overflow-scroll" order="vertical">
	{#each achievements as { title, date, icon, description = "" }}
		<TimelineItem {title} {date}>
			<svelte:fragment slot="icon">
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
				>
					<svelte:component
						this={icon}
						class="w-3 h-3 text-blue-600 dark:text-blue-400"
						fill="currentColor"
					/>
				</span>
			</svelte:fragment>
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				{description}
			</p>
		</TimelineItem>
	{/each}
</Timeline>
