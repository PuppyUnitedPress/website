<script lang="ts">
    import "./app.css"
    import PUPPAWTRANS from "$lib/assets/logos/PUPPAWTRANS.png"
    import PUPLOGOTRANS from "$lib/assets/logos/PUPLOGOTRANS.png"
</script>
<svelte:head>
    <link rel="icon" href={PUPPAWTRANS} />
    <title>Puppy United Press</title>
</svelte:head>

<main>
    <header class="h-10">
        <a href="/"><img src={PUPLOGOTRANS} alt="Puppy United Press" /></a>
        <h1>Puppy United Press</h1>
    </header>
    <slot />
</main>