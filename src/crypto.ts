import jsSHA from 'jssha';

/**
 * Calculates the SHA-1 hash of a given input string.
 * @param input - The string to be hashed.
 * @returns The SHA-1 hash of the input string.
 */
export function sha1(input: string): string {
	const shaObj = new jsSHA('SHA-1', 'TEXT');
	shaObj.update(input);
	return shaObj.getHash('HEX');
}

/**
 * Calculates the SHA-256 hash of a given input string.
 * @param input - The string to be hashed.
 * @returns The SHA-256 hash of the input string.
 */
export function sha256(input: string): string {
	const shaObj = new jsSHA('SHA-256', 'TEXT');
	shaObj.update(input);
	return shaObj.getHash('HEX');
}

/**
 * Calculates the checksum of an array of tokens by concatenating them and hashing the result using SHA-256.
 * @param tokens - An array of tokens to be hashed.
 * @returns The SHA-256 hash of the concatenated tokens.
 */
export function calculateTokenChecksum(tokens: string[]): string {
	const shaObj = new jsSHA('SHA-256', 'TEXT');
	shaObj.update(tokens.join(''));
	return shaObj.getHash('HEX');
}
