<script>
    import { goto } from "$app/navigation";
    import { targets } from "$lib/Stores/targets";

    let name = ''
    let total = 0
    let saved = 0

    let dashArray = 209;
    $: dashOffset = savedToOffset(total, saved)
    

    function savedToOffset(total = 0, saved = 0) {
	const dashArray = 209;
    let converted = (saved * dashArray) / total;
    let offset = dashArray - converted;
    return offset
    }

    function addNewTarget() {
        let offset = savedToOffset(total, saved);
        
        if(name != undefined && total > 0) {
            let newTarget = {
            id: $targets[$targets.length - 1].id + 1,
            name: name,
            total: total,
            saved: saved,
            dasharray: 209,
            offset: offset
            }
            $targets = [...$targets, newTarget]
            goto('/overview')
        }
    }
</script>

<main class="add-target-section">
    <h1>Add New Target</h1>
    <section class="new-target-view">
        <svg width="150" height="150" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="base" cx="37.5" cy="37.5" r="33.5" stroke="var(--base)" stroke-width="8"/>
            <circle cx="37.5" cy="37.5" r="33.5" stroke="#27D679" stroke-width="8"
            stroke-linecap='round'
            stroke-dasharray={dashArray}
            stroke-dashoffset={dashOffset}
            />
        </svg>
        <h2>{name}</h2>
        <h3>You saved ${saved} of the total amount: ${total}</h3>
    </section>
    <section class="input-section">
        <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Name of your target" bind:value={name}>
        </div>
        <div>
            <label for="total">Total Amount of Target:</label>
            <input type="number" min="0" name="total" id="total" placeholder="Total price of your target" bind:value={total}>
        </div>
        <div>
            <label for="saved">Amount You Saved:</label>
            <input type="number" min="0" name="saved" id="saved" placeholder="Amount you saved for your target" bind:value={saved}>
        </div>
    </section>
    <section class="add-target">
        <button on:click={addNewTarget}>Add Target</button>
    </section>
</main>

<style>
    .add-target-section {
        display: grid;
        gap: 2em;
        margin: 1em;
    }

    .new-target-view > * {
        margin-block: 1em;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-block: 1em;
    }

    svg {
        transform: rotate(-90deg);
    }

    input {
        color: var(--white);
    }
</style>