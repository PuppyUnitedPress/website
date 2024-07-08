import { Theme } from "$lib/constants";
import type { LayoutServerLoad } from "./$types";

export const prerender = false;

export const load: LayoutServerLoad = async ({cookies, url}) => {
    return {
        theme: cookies.get("theme") as Theme || Theme.Unset,
        noads: url.searchParams.has("noads") || cookies.get("noads") === "true",
    }
}