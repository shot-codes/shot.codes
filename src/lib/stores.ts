import { writable } from 'svelte/store';

export const activeBackgroundColor = writable('#ffffff');
export const navBorderColor = writable('#ffffff');
export const activeTextColor = writable('#000000');

export const pointer = writable({
	x: 0,
	y: 0
});
