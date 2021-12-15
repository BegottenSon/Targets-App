import { writable, derived } from 'svelte/store';
import { vacuums } from '/src/lib/Stores/vacuums';

let vacuumArray = [];
let vacuumUnsubscribe = vacuums.subscribe((val) => {
	vacuumArray = val;
});
vacuumUnsubscribe();
const vacuumsSum = () => {
	let sum = vacuumArray.reduce((total, expense) => {
		return total + expense.amount;
	}, 0);
	return sum;
};

export const income = writable(2800);
export const expenses = writable(vacuumsSum());
export const ballin = derived([income, expenses], ([$income, $expenses]) => $income - $expenses);

function calculateIncomeOffset(income, expenses) {
	const dashArray = 284;
	let total = expenses === 0 ? 1 : expenses;
	let converted = (income * dashArray) / total;
	let offset = dashArray - converted;
	return offset;
}
function calculateBallinOffset(income, ballin) {
	const dashArray = 284;
	let converted = (ballin * dashArray) / income;
	let offset = dashArray - converted;
	return offset;
}

export const calculateOffset = {
	incomeOffset: calculateIncomeOffset,
	ballinOffset: calculateBallinOffset
};
