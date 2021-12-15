import { writable } from 'svelte/store';

export const targets = writable([
	{
		id: 1,
		name: 'Push 2',
		total: 900,
		saved: 800,
		dasharray: 209,
		offset: savedToOffset(900, 800)
	},
	{
		id: 2,
		name: 'Trip',
		total: 1800,
		saved: 1200,
		dasharray: 209,
		offset: savedToOffset(1800, 1200)
	},
	{
		id: 3,
		name: 'Studio One',
		total: 400,
		saved: 50,
		dasharray: 209,
		offset: savedToOffset(400, 50)
	}
]);

//Use this function on new entry of a target
export function savedToOffset(total = 0, saved = 0) {
	const dashArray = 209;
    const converted = (saved * dashArray) / total;
    const offset = dashArray - converted;
    return offset
}
