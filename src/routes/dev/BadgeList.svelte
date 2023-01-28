<script lang="ts">
	import { Indicator } from "flowbite-svelte";
	import { HeartSolid } from "svelte-awesome-icons";

    export let badges: App.Badge[];
</script>

{#each badges as { slug, name = slug, logoColor = 'white', loved = false, color }, i}
    <div class="relative">
        <img alt={name} src={`https://img.shields.io/badge/-${encodeURIComponent( name
        )}-${color}?logo=${slug}&logoColor=${logoColor}&style=for-the-badge`} /> {#if loved}
        <Indicator placement="top-right" size="lg" color="none">
            <HeartSolid class="text-red-700 dark:text-white" size="12" />
        </Indicator>
        {/if}
    </div>
{/each}
