<script lang="ts">
    import { Heading, A, P, Hr, Badge, Breadcrumb, BreadcrumbItem, Button, Toggle, Span } from 'flowbite-svelte';
    import { RssSolid } from 'svelte-awesome-icons';

    function formatDate(date: string, dateStyle: Blog.DateStyle = 'medium', locales = 'en') {
        // Dash sanitization for Safari
        const dateToFormat = new Date(date.replaceAll('-', '/'))
        const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
        return dateFormatter.format(dateToFormat)
    }

    export let data;
</script>

<svelte:head>
    <link rel="alternate" type="application/atom+xml" href="/rss.xml" />
	<meta property="og:title" content="Polarity's Blog" />
    <meta property="og:description" content="A collection of pseudorandom thoughts" />
</svelte:head>

<div class="max-w-3xl py-8">
    <div class="flex justify-between mb-8 space-x-2">
        <Breadcrumb aria-label="Default breadcrumb blog">
            <BreadcrumbItem href="/blog" home>Blog</BreadcrumbItem>
        </Breadcrumb>
        <Button size="xs" color="dark" outline href="/blog/category/problem-journal">Problem Solving Journal</Button>
        <Breadcrumb class="hidden sm:inline-flex" aria-label="Default breadcrumb rss">
            <BreadcrumbItem href="/blog/rss.xml" home>
                <svelte:fragment slot="icon">
                    <RssSolid size="16" class="me-2" />
                </svelte:fragment>
                RSS Feed
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
    
    {#each data.posts as { title, slug, description, date, categories, problems = null, journalOnly = false}}
        {#if !journalOnly}
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
                { description ?? '' }
            </P>
            {#if problems}
                <P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
                    <Span>Problems: </Span>
                    {#each problems as problem, i}
                    {i > 0 ? ' · ':''}{problem} 
                    {/each}
                </P>
            {/if}
            <A href={"/blog/post/" + slug} class="font-medium hover:underline">Read more</A>
            <Hr class="mb-8" height="h-px" />
        {/if}
    {/each}
</div>

