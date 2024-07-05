import type { Component } from "svelte";

// If you move the interface off line 4, remember to update the README!
interface FrontMatter {
    slug: string;
    createdAt: number;
    title: string;
    summary: string;
    author: string;
    unpublished?: boolean;
}

interface Article {
    metadata: FrontMatter;
    default: () => Component;
}
const globArticles: Record<string, Article> = import.meta.glob("./articles/**/*.svx", { eager: true });
export const articles: Record<string, Article> = Object.fromEntries(Object.values(globArticles).filter(i=>i.metadata).map(i=>{
    // Replace ： with : everywhere in the metadata
    for (const key in i.metadata) {
        // @ts-expect-error index signature
        if (typeof i.metadata[key] !== "string") continue;
        // @ts-expect-error index signature
        i.metadata[key] = i.metadata[key].replace(/：/g, ":");
    }
    // hacky, idk why we need this?
    i.metadata.createdAt = Number(i.metadata.createdAt.toString() + "000")
    return [i.metadata.slug.toLowerCase(), i];
}));

export const articleList = Object.values(articles).map(article => article.metadata).sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
})