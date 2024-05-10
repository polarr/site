<script lang="ts">
    import { Heading, A, P, Hr, Badge, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
    function formatDate(date: string, dateStyle: Blog.DateStyle = 'medium', locales = 'en') {
        // Dash sanitization for Safari
        const dateToFormat = new Date(date.replaceAll('-', '/'))
        const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
        return dateFormatter.format(dateToFormat)
    }

	export let data;

    const { title, date, description, categories, slug, published } = data.meta;
</script>

<!-- SEO -->
<svelte:head>
	<title>{title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" crossorigin="anonymous">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>

<article class="max-w-3xl py-8">
    <Breadcrumb aria-label="Default breadcrumb example" class="mb-8">
        <BreadcrumbItem href="/blog" home>Blog</BreadcrumbItem>
        <BreadcrumbItem>{ title }</BreadcrumbItem>
    </Breadcrumb>

    <Heading tag="h1" customSize="text-4xl font-extrabold">{ title }</Heading>
    {#if published}
        <P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
            Published { formatDate(date) }
        </P>
        {:else}
        <P class="my-4" weight="light" color="text-gray-500 dark:text-gray-400">
            Written { formatDate(date) }, Unpublished
        </P>
    {/if}
    {#each data.meta.categories as category}
        <Badge color="dark" class="mr-1" href={"/blog/category/" + category}>
            &num;{category}
        </Badge>
    {/each}
    <P class="my-4" weight="light" color="text-gray-800 dark:text-gray-200">
        <svelte:component this={data.content} />
    </P>
    <Hr class="my-8" height="h-px" />
</article>