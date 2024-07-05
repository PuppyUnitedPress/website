<script lang="ts">
    import { articleList } from "$lib/articles";
    import { MetaTags } from 'svelte-meta-tags'
</script>

<MetaTags title="Puppy United Press" description="The best news source for puppies" />

<main>
    <h2>Articles</h2>
    <div class="list">
        {#each articleList.filter(i=>!i.unpublished) as article}
            <a href="/{article.slug}" class="article">
                <h3>{article.title}</h3>
            
                <p class="summary">{article.summary}</p>
            </a>
        {/each}
    </div>
</main>

<style>

    .list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1em;
    }

    .article {
        padding: 1em;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-decoration: none;
        color: inherit;
    }

    a {
        text-decoration: none;
    }
    h3 {
        text-decoration: underline;
    }
</style>