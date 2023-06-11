import type { RegisterUserResponse } from './custom';
import { apiServerURL } from './const';

const defaultHeaders = {
	Accept: 'application/vnd.api+json',
	'Content-Type': 'application/vnd.api+json'
};

/**
 * Registers a new user on the server.
 * @returns {Promise<RegisterUserResponse>} JSON-API response containing an ID as a UUIDv4.
 */
export async function registerUser(): Promise<RegisterUserResponse> {
	const response = await fetch(`${apiServerURL}/accounts/users/`, {
		method: 'POST',
		headers: defaultHeaders,
		body: '{"data":{"type":"user"}}'
	});
	const json = await response.json();
	return json;
}

/**
 * Sets the nickname of a user.
 * @param {string} userId The ID of the user to set the nickname of. Must be a UUIDv4.
 * @param {string} nickname The nickname to set.
 * @returns {Promise<any>} A promise that resolves when the request is complete.
 * @throws {Error} If the request fails.
 */
export async function setNickname(userId: string, nickname: string): Promise<any> {
	const response = await fetch(`${apiServerURL}/accounts/users/${userId}`, {
		method: 'PATCH',
		headers: defaultHeaders,
		body: `{"data":{"type":"user","attributes":{"nickname":"${nickname}"}}}`
	});
	const json = await response.json();
	return json;
}
