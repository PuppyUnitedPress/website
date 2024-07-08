<script lang="ts">
    import PUPPAWTRANS from "$lib/assets/logos/PUPPAWTRANS.png"
    import PUPLOGOTRANS from "$lib/assets/logos/PUPLOGOTRANS.png"
	import { onMount, setContext } from "svelte";
	import { Theme } from "$lib/constants.js";
	import { enhance } from "$app/forms";
	import { browser } from "$app/environment";

    const { data, children } = $props();

    let theme = $state(data.theme);

    setContext("theme", {
        get value() {
            return theme;
        },
        set value(val) {
            theme = val;
        }
    });

    $effect(() => {
        if (browser) {
            if (!theme || theme === Theme.Unset) {
                theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light;
            }
        }
    })
</script>
<svelte:head>
    <link rel="icon" href={PUPPAWTRANS} />
    <title>Puppy United Press</title>

    {#if !data.noads}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9830041258194012"
		crossorigin="anonymous"></script>
    {/if}
</svelte:head>

<main class:dark={theme === Theme.Dark}>
    <div class="header">
        <div class="left">
        <a href="/"><img src={PUPLOGOTRANS} alt="Puppy United Press" /></a>
        <!-- <a href="/latest">Latest Articles</a> -->
    </div>
    <div class="right">
        <form use:enhance={() => () => theme = theme === Theme.Dark ? Theme.Light : Theme.Dark} action={"/settings?/" + (theme === Theme.Dark ? "light" : "dark") + "Theme"} method="post">
            <button type="submit">{theme === Theme.Dark ? "☽" : "☼"}</button>
        </form>
    </div>
    </div>
    <div class="root">
    {@render children()}
</div>
</main>

<style>

    :global(html, body) {
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: #f0f0f0;

        .dark {
            background-color: #202020;
            color: #f0f0f0;
        }

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    main {
        width: 100%;
        height: 100%;
    }

    :global(a) {
        color: inherit;
    }

    .header {
        height: 50px;

        display: flex;
        vertical-align: middle;
        text-align: center;
        justify-content: space-between;

        .left, .right {
            height: 100%;
            display: flex;
            align-items: center;
        }

        .left {
            justify-self: left;
            padding-left: 10px;
        }

        .right {
            justify-self: right;
            padding-right: 10px;
        }

        img, a:has(img) {
            height: 100%;
        }
    }


    .root {
        display: flex;
        flex-direction: column;
        padding: 1em;
    }
</style>