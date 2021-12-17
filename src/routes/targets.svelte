<script>
    import SlideSideways from '$lib/Transitions/SlideSideways.svelte';
    import { targets, savedToOffset } from "$lib/Stores/targets";
    import { fly } from "svelte/transition";
import Nav from '$lib/Layouts/Nav.svelte';

    let focusedTarget = {};
    let popUp = false;
    let newName = '';
    let newTotal = 0;
    let newSaved = 0;

    //For reactivity to update page after target changes
    $: targetsView = $targets

    function showPopup(id) {
        popUp = true
        focusedTarget = $targets.find(target => target.id === id);
        newName = focusedTarget.name;
        newTotal = focusedTarget.total;
        newSaved = focusedTarget.saved;
    }

    function updateTarget() {
        //TODO: create if statement to only allow money that's available 
        popUp = false;
        focusedTarget.name = newName;
        focusedTarget.total = newTotal;
        focusedTarget.saved = newSaved;
        let updatedOffset = savedToOffset(focusedTarget.total, focusedTarget.saved);
        focusedTarget.offset = updatedOffset;
        let updatedTarget = focusedTarget;
        $targets.forEach(target => {
            if(target.id === updatedTarget.id) {
                target = updatedTarget
            }
        })
        targetsView = $targets
    }
</script>

<SlideSideways>
    <main>
        <h1>Targets</h1>
        <section class="targets">
            {#each targetsView as target}
                <div class="target">
                    <svg width="100" height="100" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id="base" cx="37.5" cy="37.5" r="33.5"  stroke-width="8"/>
                        <circle cx="37.5" cy="37.5" r="33.5" stroke="#27D679" stroke-width="8" stroke-linecap='round'
                        stroke-dasharray={target.dasharray}
                        stroke-dashoffset={target.offset}/>
                    </svg>
                    <h3 class="name">{target.name}</h3>
                    <h3 class="saved">${target.saved}</h3>
                    <p class="total">of ${target.total}</p>
                    <button on:click={showPopup(target.id)}>Add $</button>
                </div>
            {/each}
        </section>
        {#if popUp}
            <section class="target-focused" transition:fly={{y: 1000, opacity: 1, duration: 300}}>
                <h2>{focusedTarget.name}</h2>
                <svg width="100" height="100" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle id="base" cx="37.5" cy="37.5" r="33.5"  stroke-width="8"/>
                    <circle cx="37.5" cy="37.5" r="33.5" stroke="#27D679" stroke-width="8" stroke-linecap='round'
                    stroke-dasharray={focusedTarget.dasharray}
                    stroke-dashoffset={focusedTarget.offset}/>
                </svg>
                <h3>You saved ${focusedTarget.saved} of the total amount: ${focusedTarget.total}</h3>
                <section class="input-section">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Name of your target" bind:value={newName}>
                    </div>
                    <div>
                        <label for="total">Total Amount of Target:</label>
                        <input type="number" min="0" name="total" id="total" placeholder="Total price of your target" bind:value={newTotal}>
                    </div>
                    <div>
                        <label for="saved">Amount You Saved:</label>
                        <input type="number" min="0" name="saved" id="saved" placeholder="Amount you saved for your target" bind:value={newSaved}>
                    </div>
                    <button on:click={() => popUp = false} class='cancel'>Cancel</button>
                    <button on:click={updateTarget}>Update</button>
                </section>
            </section>  
        {/if}

        <Nav />
    </main>
</SlideSideways>

<style>
    main {
        position: relative;
        min-height: 100vh;
        width: 100vw;
    }

    h1 {
        padding-block: 1em;
    }

    .targets {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: space-between;
        margin: 1em;
    }

    svg {
        transform: rotate(-90deg);
    }

    .target-focused {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        background-color: var(--dark-blue);
    }

    .target-focused > h2, .target-focused > svg, .target-focused > .input-section {
        margin: 1em;
    }

    .name {
        font-size: 24px;
    }

    .saved {
        color: var(--green);
    }

    .total {
        font-size: 12px;
    }

    #base {
        stroke: var(--base);
    }

    button {
        margin-block: 1em;
    }

    .cancel {
       border-color: rgb(122, 134, 125);
       color: rgb(122, 134, 125); 
    }
</style>