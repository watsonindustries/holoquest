import { assert, test } from 'vitest';
import { generateNickname } from './hololive-nick-gen';

test('generateNickname generates a nickname', () => {
	const nickname = generateNickname();
	assert(typeof nickname === 'string');
	assert(nickname.length < 25);
});