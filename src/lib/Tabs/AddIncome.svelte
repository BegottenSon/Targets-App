<script>
    import { createEventDispatcher } from "svelte";
    import { income } from "$lib/Stores/money";
    import SlideUp from '$lib/Transitions/SlideUp.svelte';

    const dispacth = createEventDispatcher();

    let value = 0;
    // export let active
    // export let addList
    // export let showIncome

    function addIncome() {
        $income = $income + value;
        dispacth('handleIncome', {
            reset: false
        })
    }
</script>
<SlideUp>
    <div>
        <h3>Add Income</h3>
        <h4>Monthly Total: {$income.toLocaleString('en-US')}</h4>
        <input type="number" bind:value={value} min='0'>
        <button on:click={addIncome}>Add</button>
    </div>

</SlideUp>

<style>
    div {
        display: flex;
        flex-direction: column;
        padding-inline: 1em;
        gap: 1em;
    }

    input {
        appearance: none;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid var(--green);
        padding-block: 10px;
        font-size: large;
        color: var(--green);

    }

    button {
        font-size: 16px;
        height: 4em;
    }
</style>