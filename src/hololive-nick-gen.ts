const DATASETS = {
	ADJECTIVES: ['Lovely', 'Confident', 'Robust', 'Dynamic', 'Brave', 'Calm', 'Sad', 'Wise', 'Wild', 'Clean', 'Crazy', 'Sneaky', 'Silly', 'Lucid', 'Leader'],
	FANNAMES: ['Dead_Beat', 'KFP', 'Chimken', 'Takodachis', 'Chumbud', 'Teamate', 'Gator', 'Irystocrat', 'Sapling', 'Kronie', 'Hooman', 'Brat', 'Baerat']
}

function randomInt({ min = 0, max = 100 }): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generates a random hololive-themed nickname
 * @returns {string} A random nickname consisting of an adjective and a fanname
 * @example
 * const nickname = generateNickname();
 * console.log(nickname); // "Cruel_KFP"
 */
export function generateNickname(): string {
	const adjective = DATASETS.ADJECTIVES[randomInt({ max: DATASETS.ADJECTIVES.length - 1 })];
	const fanname = DATASETS.FANNAMES[randomInt({ max: DATASETS.FANNAMES.length - 1 })];
	return `${adjective}_${fanname}`;
}
