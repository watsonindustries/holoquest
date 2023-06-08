export const csr = true;

import { initChannel, initSocket } from "../phoenix-client";
import type { LayoutLoad } from "./$types";

export const load = (() => {
	const token = 'a0ee29b4-8f6c-464b-9b2d-2b77979e01e1';
	const socket = initSocket("ws://localhost:4000/socket", token);
	const channel = initChannel(socket, "notifications:lobby");

	return {
		socket, channel
	};
}) satisfies LayoutLoad;