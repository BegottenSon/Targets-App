<script>
    import { createEventDispatcher } from "svelte";
    import { vacuums } from "$lib/Stores/vacuums";
    import SlideUp from '$lib/Transitions/SlideUp.svelte';

    const dispatch = createEventDispatcher();
    let name;
    let value;

    function addExpense() {
        let expense = {
            id: $vacuums[$vacuums.length - 1].id + 1,
            name: name,
            amount: value
        }
        $vacuums.push(expense)
        dispatch('handleExpense', {
            reset: false
        })
    }
</script>

<SlideUp>
    <section>
        <h3>Add Expense</h3>
        <label for="name">Expense Name: </label>
        <input type="text" bind:value={name} name="name">
        <label for="amount">Amount: </label>
        <input type="number" bind:value={value} min='0' name="amount">
        <button on:click={addExpense}>Add</button>
    </section>
</SlideUp>



<style>
    section {
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
</style>