import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async ({cookies}) => {
    return {
        dark: cookies.get("dark") === "true",
    }
}