const HOLOJP_FANNAMES = ["Soratomo",
	"Robosa",
	"35P",
	"Hoshiyomi",
	"Kabumin",
	"Rosetai",
	"Senpai",
	"Sukonbu",
	"Matsurisu",
	"Aqua_Crew",
	"Shiokko",
	"Human",
	"Chocomaid",
	"Subatomo",
	"Mion_Family",
	"Onigiriya",
	"Koronesuki",
	"Kaitakusha",
	"Fandead",
	"Elfriend",
	"Shirogane",
	"Houshou",
	"Heimin",
	"Tatsunoko",
	"Watamate",
	"Lu_Knight"];

const HOLOEN_FANNAMES = ['Dead_Beat', 'KFP', 'Chimken', 'Takodachi', 'Chumbud', 'Teamate', 'Gator', 'Irystocrat', 'Sapling', 'Kronie', 'Hooman', 'Brat', 'Baerat'];

const DATASETS = {
	ADJECTIVES: ['Lovely', 'Confident', 'Robust', 'Dynamic', 'Brave', 'Calm', 'Sad', 'Wise', 'Wild', 'Clean', 'Crazy', 'Sneaky', 'Silly', 'Lucid', 'Leader'],
	FANNAMES: HOLOEN_FANNAMES.concat(HOLOJP_FANNAMES)
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
