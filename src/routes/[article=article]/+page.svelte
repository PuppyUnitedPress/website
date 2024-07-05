<script lang="ts">
	import { page } from "$app/stores";
	import { articleList, articles } from "$lib/articles";
    import { MetaTags } from 'svelte-meta-tags'
    import { LOGO_COLORS } from "$lib/constants";
    import MetaTagsColor from "$lib/shortcuts/metatags/color";
    import moment from 'moment';

    const { data } = $props();

    type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
    const component = data.article.default as C;

    console.log(data.article.metadata.createdAt);
</script>

<MetaTags title={data.article.metadata.title} description={data.article.metadata.summary} additionalMetaTags={MetaTagsColor(LOGO_COLORS.blue)}/>

<svelte:head>
    <title>{data.article.metadata.title}</title>
</svelte:head>

<main>
    <h1>{data.article.metadata.title}</h1>
    <p>Article by <a href={`https://x.com/${data.article.metadata.author}`}>@{data.article.metadata.author}</a></p>
    <p>Wrote on {moment(data.article.metadata.createdAt).format("l")}</p>
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