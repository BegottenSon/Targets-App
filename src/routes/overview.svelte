<script>
import Nav from "$lib/Layouts/Nav.svelte";
import OverviewBanner from "$lib/Overview/OverviewBanner.svelte";
import TargetsOverview from "$lib/Overview/TargetsOverview.svelte";
import VacuumOverview from "$lib/Overview/VacuumOverview.svelte";
import AddExpense from "$lib/Tabs/AddExpense.svelte";
import AddIncome from '$lib/Tabs/AddIncome.svelte';
import SlideSideways from "$lib/Transitions/SlideSideways.svelte";

import { fly } from "svelte/transition";

let activeTab = false;
let showAddList = true;
let showIncome = false;
let showExpense = false;
let addOptions = [
    {
        title: 'Add Target',
        path: '/add-target',
        action: null
    },
    {
        title: 'Add Income',
        path: '',
        action: showIncomeTab
    },
    {
        title: 'Add Expenses',
        path: '',
        action: showExpenseTab
    }
];

//Toggling tabs
function toggleActiveTab() {
    activeTab = false;
    showAddList = true;
    showIncome = false;
    showExpense = false;
}

function showIncomeTab() {
    showAddList = false;
    showIncome = true;
}

function showExpenseTab() {
    showAddList = false;
    showExpense = true;
}

//Handle inputs from nested components 
function handleIncome(e) {
    let reset = e.detail.reset;
    activeTab = reset
    showAddList = true;
    showIncome = reset;

}

function handleExpense(e) {
    let reset = e.detail.reset;
    activeTab = reset;
    showAddList = true;
    showIncome = reset;
}
</script>

<SlideSideways direction=-500>
    <main>
        <section class:dim={activeTab} class="transition">
            <OverviewBanner />
            <TargetsOverview />
            <VacuumOverview />
        </section>

        <!-- <nav>
            <svg width="50" height="50" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="home" transform="matrix(7.15263,0,0,7.0845,-214.179,-140.535)">
                    <path d="M34,30L32,30C32,30 31,30 31,29L31,25C30.128,25.133 29.802,24.904 30,24C30,24 33.611,20.667 34.445,20C34.705,19.791 35.201,19.774 35.446,20C36.353,20.833 40,24 40,24C40.118,25.092 39.184,25.534 39,25L39,29C39,30 38,30 38,30L36,30C36,30 36.183,26.528 36,26C35.75,25.28 34.197,25.28 34,26C33.853,26.539 34,30 34,30Z"/>
                </g>
            </svg>
            <svg on:click={() => activeTab = !activeTab} class="addBtn" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM23 12.5V23H12.5V27H23V37.5H27V27H37.5V23H27V12.5H23Z"/>
            </svg>
        </nav> -->
        <Nav on:click={() => activeTab = !activeTab}/>
        <section class="add-options" class:activeTab>
            <svg on:click={toggleActiveTab} id='close-button' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L19 19" stroke="#EBEBEB" stroke-width="3" stroke-linecap="round"/>
                <path d="M2.00006 19L19.0001 2" stroke="#EBEBEB" stroke-width="3" stroke-linecap="round"/>
            </svg>
            {#if showAddList}
            <ul class="options-section">
                {#each addOptions as option}
                <a href={option.path} on:click={option.action}>
                    <li>
                        {option.title}
                        <span>
                            <svg id="arrow-head" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.5L14.5283 9.1373C15.1874 9.52364 15.1874 10.4764 14.5283 10.8627L1.5 18.5" stroke="#EBEBEB" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </span>
                    </li>
                </a> 
                {/each}
            </ul>
            {:else if showIncome}
            <div class="income-tab" transition:fly={{y: 200, duration: 300}}>
                <AddIncome
                on:handleIncome={handleIncome}
                />
    
            </div>
            {:else if showExpense}
                <AddExpense 
                on:handleExpense={handleExpense}
                />
            {/if}
    
        </section>
    </main>
</SlideSideways>

<style>
    main {
        position: relative;
        height: 100vh;
        overflow-y: hidden;
    }

    .dim {
        filter: blur(0.6px);
        opacity: 0.6;
    }

    .transition {
        transition: all 200ms;
    }

    /* nav {
        display: flex;
        justify-content: space-between;
        position: fixed;
        left: 45%;
        bottom: 20px;
        width: 200px;
        fill: var(--white);
    }

    .addBtn {
        fill: var(--white);
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) ease-out 250ms;
        user-select: none;
    }

    .addBtn:hover {
        fill: var(--link-color);
        cursor: pointer;
    }

    .addBtn:active {
        fill: var(--green);
        transform: scale(0.95);
    } */

    .add-options {
        display: flex;
        flex-direction: column;
        background-color: var(--royal-blue);
        border-radius: 40px;
        height: 70vh;
        padding-block: 2em;
        transform: translateY(50vh);
        opacity: 0.2;
        box-shadow: 0px -12px 20px rgba(3, 9, 44, 0.699);
        transition: all var(--ease-up) 200ms;
    }

    .activeTab {
        opacity: 1;
        transform: translateY(-40vh);
    }

    #close-button {
        align-self: flex-end;
        padding-inline-end: 1.5em;
        padding-block-end: 2em;
    }

    li {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        font-size: 20px;
        border-bottom: 1px solid var(--white);
    }
</style>