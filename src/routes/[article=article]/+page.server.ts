import { articleList } from "$lib/articles";
import type { EntryGenerator } from "./$types";

export const entries: EntryGenerator = () => {
    return articleList.map(article => ({
        article: article.slug,
    }));
}