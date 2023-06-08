import { Socket } from 'phoenix';

export function initSocket(url: string, token: string) {
	const socket = new Socket(url, { params: { token } });

	try {
		socket.connect();
	} catch (error) {
		console.error(error);
	}
	return socket;
}

export function initChannel(socket: Socket, topic: string) {
	const channel = socket.channel(topic, {});

	try {
		channel.join().receive("ok", (response) => {
			console.log("Joined successfully", response);
		});
	} catch (error) {
		console.error(error);
	}
	return channel;
}