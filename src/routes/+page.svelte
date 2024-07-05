<script lang="ts">
	import { articleList } from '$lib/articles';
	import { MetaTags } from 'svelte-meta-tags';
	import PUPLOGOTRANS from '$lib/assets/logos/PUPLOGOTRANS.png';
	import MetaTagsColor from '$lib/shortcuts/metatags/color';
    import moment from 'moment';

	import { LOGO_COLORS } from '$lib/constants';
</script>

<MetaTags
	title="Puppy United Press"
	description="The best news source for Furries And Therians"
	twitter={{
		image: PUPLOGOTRANS,
		title: 'Puppy United Press',
		description: 'The best news source for Furries And Therians',
	}}
	additionalMetaTags={MetaTagsColor(LOGO_COLORS.blue)}
/>

<main>
	<h2>Articles</h2>
	<div class="list">
		{#each articleList.filter((i) => !i.unpublished) as article}
			<a href="/{article.slug}" class="article">
				<h3>{article.title}</h3>
                <h4>{article.author}</h4>
                <h5>{moment(article.createdAt).format("MMM Do YY")}</h5>

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
