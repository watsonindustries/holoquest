import type { LeaderboardResponse, RegisterUserResponse, SetNicknameResponse } from './custom';
import { apiServerURL } from './const';

const apiToken = import.meta.env.VITE_HOLOQUEST_API_TOKEN;

const defaultHeaders = {
	Accept: 'application/vnd.api+json',
	'Content-Type': 'application/vnd.api+json',
	Authorization: `Bearer ${apiToken}`
};

/**
 * Registers a new user on the server.
 * @returns {Promise<RegisterUserResponse>} JSON-API response containing an ID as a UUIDv4.
 */
export async function registerUser(nickname = ''): Promise<RegisterUserResponse> {
	const response = await fetch(`${apiServerURL}/accounts/users/`, {
		method: 'POST',
		headers: defaultHeaders,
		body: `{"data":{"type":"user","attributes":{"nickname":"${nickname}"}}}`
	});
	const json = await response.json();
	return json;
}

/**
 * Sets the nickname of a user.
 * @param {string} userId The ID of the user to set the nickname of. Must be a UUIDv4.
 * @param {string} nickname The nickname to set.
 * @returns {Promise<SetNicknameResponse>} A promise that resolves when the request is complete.
 */
export async function setNickname(userId: string, nickname: string): Promise<SetNicknameResponse> {
	const response = await fetch(`${apiServerURL}/accounts/users/${userId}`, {
		method: 'PATCH',
		headers: defaultHeaders,
		body: `{"data":{"type":"user","attributes":{"nickname":"${nickname}"}}}`
	});
	const json = await response.json();
	return json;
}

/**
 * Fetches the leaderboard from the server.
 * @returns {Promise<LeaderboardResponse>} JSON-API response containing the leaderboard.
 * @example
 * const leaderboard = await fetchLeaderboard();
 * console.log(leaderboard); // { data: [{ id: '...', type: 'user', attributes: { nickname: '...', stamps_collected: 0 } }] }
 * console.log(leaderboard.data[0].attributes.nickname); // "Cruel_KFP"
 * console.log(leaderboard.data[0].attributes.stamps_collected); // 0
 */
export async function fetchLeaderboard(): Promise<LeaderboardResponse> {
	const response = await fetch(`${apiServerURL}/leaderboard`, {
		method: 'GET',
		headers: defaultHeaders
	});
	const json = await response.json();
	return json;
}

export async function updateScore(userId: string, score: number): Promise<void> {
	const response = await fetch(`${apiServerURL}/accounts/users/${userId}`, {
		method: 'PATCH',
		headers: defaultHeaders,
		body: `{"data":{"type":"user","attributes":{"stamps_collected":${score}}}}`
	});
	const json = await response.json();
	return json;
}
