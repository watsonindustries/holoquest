import { persisted } from 'svelte-persisted-store';

export const collectedStamps = persisted('collected-stamps', {});
export const expectedStamps = persisted('expected-stamps', {});
