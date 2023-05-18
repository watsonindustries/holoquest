import jsSHA from 'jssha';

/**
 * 
 * @param input a string to be hashed
 * @returns a SHA-1 hash of the input
 */
export function sha1(input: string): string {
	const shaObj = new jsSHA("SHA-1", "TEXT");
	shaObj.update(input);
	return shaObj.getHash("HEX");
}

