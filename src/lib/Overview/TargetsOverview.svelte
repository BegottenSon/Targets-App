<script>
import OverviewSection from "$lib/Layouts/OverviewSection.svelte";
import { targets } from '$lib/Stores/targets'

//TODO: Add database and store to save and pull targets from.

//TODO: Create the formulas coverting stroke dasharray and offset to total price and amount saved.

</script>

<OverviewSection>
    <h2>Targets</h2>
    <a href="/targets">See All</a>
    <div class="targets-visuals">
        {#each $targets as target}
        <!-- TODO: find a better solution to display only 3 -->
            {#if target.id <= 3}
            <div class="target">
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle id="base" cx="37.5" cy="37.5" r="33.5" stroke-width="8"/>
                    <circle cx="37.5" cy="37.5" r="33.5" stroke="#27D679" stroke-width="8"
                    stroke-dasharray={target.dasharray}
                    stroke-dashoffset={target.offset}/>
                </svg>
                <p>{target.name}</p>
            </div>
            {/if}
        {/each}
    </div>
</OverviewSection>

<style>
    h2 {
        padding-block: 0.5em;
    }

    p {
        padding-block: 0.5em;
        width: 9ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    a {
        background-color: var(--blue-2);
        border-radius: 8px;
        margin: 3em;
        padding: 0.4em;
    }

    .targets-visuals {
        display: flex;
        justify-content: space-evenly;
        margin-block: 2em 0.5em;
    }

    .target > svg {
        stroke-linecap: round;
        transform: rotate(-90deg);
        transition: all ease-out 500ms;
    }

    #base {
        stroke: var(--base);
    }
</style>