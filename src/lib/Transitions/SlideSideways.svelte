<script>
    import { fly } from "svelte/transition";
    import { onMount, onDestroy } from "svelte";

    let slideIn = false;
    let slideOut = false;
    export let direction = 500;

    onMount(() => slideIn = true);
    onDestroy(() => slideOut = true)
</script>

{#if slideIn || slideOut}
    <div transition:fly={{ x: direction, duration: 300}}>
        <slot></slot>
    </div>
{/if}

<style>
    div {
        /* box-shadow: 0 0 8px 8px var(--royal-blue); */
    }
</style>