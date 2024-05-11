<script lang="ts">
    import { Heading, A, P, Hr, Badge, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
    import { TagSolid, ChevronRightSolid } from "flowbite-svelte-icons";

    function formatDate(date: string, dateStyle: Blog.DateStyle = 'medium', locales = 'en') {
        // Dash sanitization for Safari
        const dateToFormat = new Date(date.replaceAll('-', '/'))
        const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
        return dateFormatter.format(dateToFormat)
    }

    function formatTag(s: string) {
        if (s.toLowerCase() == 'cs'){
            return 'CS';
        }
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }

    export let data;
</script>

<div class="max-w-3xl py-8">
    {#if data.posts?.length}
        <Breadcrumb aria-label="Default breadcrumb example" class="mb-8">
            <BreadcrumbItem href="/blog" home>
                <svelte:fragment slot="icon">
                    <TagSolid class="w-4 h-4 me-2" />
                </svelte:fragment>
                Blog
            </BreadcrumbItem>
            <BreadcrumbItem href={"/blog/category/" + data.tag}>
                {formatTag(data.tag)}
            </BreadcrumbItem>
        </Breadcrumb>
        
        
        {#each data.posts as { title, slug, description, date, categories }}
            <Heading tag="h1" customSize="text-4xl font-extrabold">{ title }</Heading>
            <P class="my-2" weight="light" color="text-gray-500 dark:text-gray-400">
                { formatDate(date) }
            </P>
            {#each categories as category}
                <Badge color="dark" class="mr-1" href={"/blog/category/" + category}>
                    &num;{category}
                </Badge>
            {/each}
            <P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
                { description }
            </P>
            <A href={"/blog/post/" + slug} class="font-medium hover:underline">Read more</A>
            <Hr class="mb-8" height="h-px" />
        {/each}

    {:else}
        <P class="my-2" weight="light" color="text-gray-500 dark:text-gray-400">
            No category "{formatTag(data.tag)}" found.
        </P>
        <A href={"/blog"} class="font-medium hover:underline">Back to blog home</A>
	{/if}
</div>