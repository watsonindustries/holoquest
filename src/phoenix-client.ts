import type { Socket } from 'phoenix';

export function initChannel(socket: Socket, topic: string) {
	const channel = socket.channel(topic, {});

	// Register handlers
	channel.on('shout', (payload) => {
		console.log('Received shout:', payload);
	});

	channel.on('ping', (payload) => {
		console.log('Received ping:', payload);
		console.log('Sending pong...');
		channel.push('pong', { body: 'pong' });
	});

	return channel;
}
