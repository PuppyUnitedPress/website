<script lang="ts">
	import { enhance } from '$app/forms';
	import { Theme } from '$lib/constants';
	import { getContext } from 'svelte';

    const { data } = $props();

    const theme = getContext<{value: Theme}>('theme');

    const setTheme = (action: URL) => {
        theme.value = action.search.match(/(\w+)Theme/)![1] as Theme;
    }
</script>

<h1>Site Settings</h1>

Welcome! Here, you can customize the website!

<h2>AdSense</h2>

Ads are {data.noads ? 'disabled' : 'enabled'}.
<form use:enhance action={"?/" + (data.noads ? 'enable' : 'disable') + "Ads"} method="post">
    <button type="submit">{data.noads ? 'Enable' : 'Disable'}</button>
</form>

<h2>Theme</h2>

The current theme is {data.theme}.
<form use:enhance={({action}) => () => setTheme(action)} method="post">
    <button formaction="?/lightTheme" type="submit">Light</button>
    <button formaction="?/darkTheme" type="submit">Dark</button>
    <button formaction="?/unsetTheme" type="submit">Browser Default</button>
</form>