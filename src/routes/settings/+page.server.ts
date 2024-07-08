import { Theme } from "$lib/constants";
import type { Actions } from "@sveltejs/kit";


export const actions: Actions = {
    disableAds({cookies}) {
        cookies.set("noads", "true", {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        });
    },
    enableAds({cookies}) {
        cookies.delete("noads", {
            path: "/",
        });
    },


    darkTheme({cookies}) {
        cookies.set("theme", Theme.Dark, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        });
    },
    lightTheme({cookies}) {
        cookies.set("theme", Theme.Light, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        })
    },
    unsetTheme({cookies}) {
        cookies.delete("theme", {
            path: "/",
        });
    },
}