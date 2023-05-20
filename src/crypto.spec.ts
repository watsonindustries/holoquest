// crypto.spec.ts
import { sha1, calculateTokenChecksum } from './crypto'; // adjust the path if necessary
import { test } from 'vitest';

test('sha1 hashes correctly', () => {
	const input = 'Hello, world!';
	const output = sha1(input);
	const expected = '943a702d06f34599aee1f8da8ef9f7296031d699'; // SHA-1 hash of 'Hello, world!'

	if (output !== expected) {
		throw new Error(`Expected ${expected}, but got ${output}`);
	}
});

test('calculateTokenChecksum hashes correctly', () => {
	const tokens = ['token1', 'token2', 'token3'];
	const output = calculateTokenChecksum(tokens);
	const expected = '8e5bb735712b8968a254f067889523d1270f099ade2abb1087d5cf09505afcaa'; // SHA-256 hash of 'token1token2token3'

	if (output !== expected) {
		throw new Error(`Expected ${expected}, but got ${output}`);
	}
});
