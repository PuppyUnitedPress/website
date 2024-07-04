<script lang="ts">
	import { page } from "$app/stores";
	import { articleList, articles } from "$lib/articles";
    // import { MetaTags } from 'svelte-meta-tags'

    const { data } = $props();

    type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
    const component = data.article.default as C;
</script>

<svelte:head>
    <title>{data.article.metadata.title}</title>
    <!-- <MetaTags title={data.article.metadata.title} description={data.article.metadata.summary} /> -->
</svelte:head>

<svelte:component this={component} />