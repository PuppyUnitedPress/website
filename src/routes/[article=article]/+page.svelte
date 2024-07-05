<script lang="ts">
	import { page } from "$app/stores";
	import { articleList, articles } from "$lib/articles";
    import { MetaTags } from 'svelte-meta-tags'

    const { data } = $props();

    type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
    const component = data.article.default as C;
</script>

<MetaTags title={data.article.metadata.title} description={data.article.metadata.summary} />

<svelte:head>
    <title>{data.article.metadata.title}</title>
</svelte:head>

<main>
    <h1>{data.article.metadata.title}</h1>
    <p>Article by <a href={`https://x.com/${data.article.metadata.author}`}>@{data.article.metadata.author}</a></p>
</main>
<div>
<svelte:component this={component} />
</div>
<!-- svelte-ignore css_unused_selector -->
<style>
    img {
        width: 50%;
        height: 50%;
    }
</style>