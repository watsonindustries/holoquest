import type { Stamp } from './custom.d';
import { dev } from '$app/environment';
/**
 * @file This file contains all the constants used in the application.
 */

// Stamp ralley partner stamp information.
// Each hash is the SHA1 hash of the stamp UUID token.
export const expectedStamps: Stamp[] = [
	{
		hash: '37d895725ad8aa8bba87a139710e909b46cb753e',
		id: 1,
		name: 'Stamp 1'
	},
	{
		id: 2,
		name: 'Stamp 2',
		hash: '26f34a24468d310ae469fcde15fef83ed9d3297d'
	},
	{
		id: 3,
		name: 'Stamp 3',
		hash: '76a12efd6c61d78ecf46c820c4210ef9eaceda34'
	},
	{
		id: 4,
		name: 'Stamp 4',
		hash: '547b3527f079fd616ccd420d242e06092efc2e1b'
	},
	{
		id: 5,
		name: 'Stamp 5',
		hash: '31db5fff1842de328bf801624d6c6a7a368849e2'
	}
];

export const socketServerURL = dev
	? 'ws://localhost:4000/socket'
	: 'wss://api.hololivefanbooth.com/socket';
export const apiServerURL = dev
	? 'http://localhost:4000/api/json'
	: 'https://api.hololivefanbooth.com/api/json';
