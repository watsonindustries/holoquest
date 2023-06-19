import type { Stamp } from './custom';
import { dev } from '$app/environment';

import watameSmug from '$lib/assets/watamesmug.jpg';
import hasukeProfilePic from '$lib/assets/hasuke-profile.jpg';
import saviProfilePic from '$lib/assets/savi-profile.jpg';

/**
 * @file This file contains all the constants used in the application.
 */

// Stamp ralley partner stamp information.
// Each hash is the SHA1 hash of the stamp UUID token.
export const expectedStamps: Stamp[] = [
	{
		hash: '37d895725ad8aa8bba87a139710e909b46cb753e',
		id: 1,
		name: 'Hasuke はすけ 4C16',
		description: `
		Digital Artist & V-Tuber | 🇩🇪🇺🇸🇯🇵 |
| Graphic Art | Illustration | Gamedev | 
Certified Hololive Simp
Modell & Banner by me.`,
		externalURL: 'https://webapp.dokomi.de/explore/c/108511',
		imageURL: hasukeProfilePic
	},
	{
		id: 2,
		name: 'SAVI✿サビ M701',
		hash: '26f34a24468d310ae469fcde15fef83ed9d3297d',
		description: `
		I'm a pink ball who simps for cute girls.. and draws…sometimes (2434) 💓Eng/Рус/日本語/Ger OK💓 business: savi.chan.commissions@gmail(.)com📩info in carrd`,
		externalURL: 'https://webapp.dokomi.de/explore/c/107468',
		imageURL: saviProfilePic
	},
	{
		id: 3,
		name: 'Stamp 3',
		hash: '76a12efd6c61d78ecf46c820c4210ef9eaceda34',
		description: '',
		externalURL: 'https://webapp.dokomi.de/explore/c/107977',
		imageURL: watameSmug
	},
	{
		id: 4,
		name: 'Stamp 4',
		hash: '547b3527f079fd616ccd420d242e06092efc2e1b',
		description: '',
		externalURL: 'https://webapp.dokomi.de/explore/c/107977',
		imageURL: watameSmug
	},
	{
		id: 5,
		name: 'Stamp 5',
		hash: '31db5fff1842de328bf801624d6c6a7a368849e2',
		description: '',
		externalURL: 'https://webapp.dokomi.de/explore/c/107977',
		imageURL: watameSmug
	}
];

export const socketServerURL = dev
	? 'ws://localhost:4000/socket'
	: 'wss://api.hololivefanbooth.com/socket';
export const apiServerURL = dev
	? 'http://localhost:4000/api/json'
	: 'https://api.hololivefanbooth.com/api/json';
