<script lang="ts">
    import { articleList } from "$lib/articles";
    import { MetaTags } from 'svelte-meta-tags'
</script>

<svelte:head>
    <MetaTags title="Puppy United Press" description="The best news source for puppies" />
</svelte:head>

<main>
    <h1>Puppy United Press</h1>

    <h2>Articles</h2>
    <ul>
        {#each articleList as article}
            <li><a href="/{article.slug}">{article.title}</a></li>
        {/each}
    </ul>
</main>