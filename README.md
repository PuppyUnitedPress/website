# Puppy's United Press Website

Welcome! This is the website of the Puppy United Press, News for all, LGBTQ+, therians, humans, and furries!

The website is up at [pup.lvna.gay](https://pup.lvna.gay) until we get a domain ^.^

If you are looking for our articles, check in `./src/lib/articles`! Everything else is handled under `./src/routes`

## Writing Articles

Articles are written in [Svelte Markdown](https://mdsvex.com)! In most cases, you will only use markdown syntax

The main exception for this is if you need images, where you will use svelte syntax to import the file and render an image element

The dashed area at the top of the files is called FrontMatter. It is how the server knows extra info about the article!

It follows yaml syntax, and impliments the [FrontMatter Interface](https://github.com/PuppyUnitedPress/website/blob/main/src/lib/articles.ts#L4)

Heres an explanation of everything:

- `slug`: The url!
- `createdAt`: The [Unix Timestamp](https://www.unixtimestamp.com/) of when the article was written
- `title`: The title of the article
- `summary`: A short summary of the article, to be shown in social media embeds and on the home page
- `author`: The author's X username
- `unpublished`: (optional) setting this to true will hide the link from our homepage, but will keep the slug active! We are currently using this for the 3 test articles, as we want to keep them but don't want to clutter the homepage

## Limitations

There are some limitations we have found while writing articles, and the ways we have overcome them

- You cannot use a normal colon (`:`) in articles frontmatter
- - Fix: Use a fullwidth colon (`：`) instead! The server automatically replaces that with the normal colon, so users will see no difference!
- You cannot use angled brackets in svelte markdown, as it conflicts with svelte syntax
- - We have not found a way to get past this yet, and help would be greatly appreciated

## Dev Server

To spin up a server, do the following!

- [Install pnpm](https://pnpm.io/installation)
- Clone the repo `git clone https://github.com/puppyunitedpress/website.git pupwebsite`
- Go into the repo `cd pupwebsite`
- Install Dependencies `pnpm install`
- Run the server! `pnpm dev`