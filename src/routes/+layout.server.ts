import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async ({cookies, url}) => {
    return {
        dark: cookies.get("dark") === "true",
        noads: url.searchParams.has("noads"),
    }
}