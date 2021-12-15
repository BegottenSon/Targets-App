import { writable } from 'svelte/store';

export const vacuums = writable([
    {
        id: 1,
        name: 'Rent',
        amount: 800,
    },
    {
        id: 2,
        name: 'Credit Cards',
        amount: 400
    }
])