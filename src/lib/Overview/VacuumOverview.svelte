<script>
import OverviewSection from "$lib/Layouts/OverviewSection.svelte";
import { vacuums } from "$lib/Stores/vacuums";

</script>


<OverviewSection>
    <h2>Vacuums</h2>
    <section class="expenses">
        {#each $vacuums as expense}
            <div class="expense">
                <h4>{expense.name}</h4>
                <h4 class="amount">${expense.amount}</h4>
            </div>
        {/each}
    </section>
</OverviewSection>

<style>
    .expenses {
        padding: 1em;
    }

    .expense {
        display: flex;
        justify-content: space-between;
        margin-block: 0.5em;
    }
</style>