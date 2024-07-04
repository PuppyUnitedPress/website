import { articles } from "$lib/articles";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params}) => {
    const article = articles[params.article.toLowerCase()];
    if (!article) return error(404, "Article not found");

    return {
        article,
    }
}