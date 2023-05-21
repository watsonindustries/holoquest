import jsSHA from 'jssha';

/**
 *
 * @param input a string to be hashed
 * @returns a SHA-1 hash of the input
 */
export function sha1(input: string): string {
	const shaObj = new jsSHA('SHA-1', 'TEXT');
	shaObj.update(input);
	return shaObj.getHash('HEX');
}

/**
 * Calculates the checksum of a string of tokens by concatenating them and hashing the result using sha-256.
 * @param tokens an array of tokens to be hashed
 * @returns a sha-256 hash of the concatenated tokens
 */
export function calculateTokenChecksum(tokens: string[]): string {
	const shaObj = new jsSHA('SHA-256', 'TEXT');
	shaObj.update(tokens.join(''));
	return shaObj.getHash('HEX');
}
