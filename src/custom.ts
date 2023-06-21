export type Stamp = {
	id: number;
	name: string;
	hash: string;
	description: string;
	externalURL?: string;
	imageURL?: string;
};

export enum ToastType {
	SUCCESS,
	ERROR
}

export type Toast = {
	type: ToastType;
	message: string;
};

export enum ScannerState {
	SCANNING,
	STOPPED
}

export type RegisterUserResponse = {
	data: {
		attributes: {
			nickname?: string;
			stamps_collected: null | 0;
		};
		id: string;
		type: 'user';
	};
	jsonapi: {
		version: '1.0';
	};
	links: {
		self: string;
	};
};

export type SetNicknameResponse = {
	data: {
		attributes: {
			nickname?: string;
			stamps_collected: null | 0;
		};
		id: string;
		type: 'user';
	};
	jsonapi: {
		version: '1.0';
	};
	links: {
		self: string;
	};
	errors?: [
		{
			code: string;
			detail: string;
			id: string;
			status: string;
			title: string;
		}
	];
};

export type LeaderboardResponse = {
	data: [
		{
			nickname: string;
			stamps_collected: number;
		}
	]
};