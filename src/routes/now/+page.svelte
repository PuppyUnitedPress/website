<script lang="ts">
    import moment from "moment";
	import { onMount } from "svelte";

    let date = $state(moment());

    onMount(() => {
        setInterval(() => {
            date = moment();
        }, 1);
    })
</script>

<main>
    <h1>Current Time</h1>
    <p>The current time is {date.format("h:mm:ss a")}</p>
    <p>The current moment timestamp is {date.unix()}</p>
</main>