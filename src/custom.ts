
export type Stamp = {
	id: number;
	name: string;
	hash: string;
	description: string;
	externalURL?: string;
	imageURL?: string;
};

export const TOAST_TYPE = {
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
} as const;

export type ToastType = keyof typeof TOAST_TYPE;

export const GACHA_STATE = {
	PLAYED: 'PLAYED',
	NOT_PLAYED: 'NOT_PLAYED',
	PLAYING: 'PLAYING',
} as const;

export type GachaState = keyof typeof GACHA_STATE;

export type Toast = {
	type: ToastType;
	message: string;
};

export const SCANNER_STATE = {
	SCANNING: 'SCANNING',
	STOPPED: 'STOPPED',
} as const;

export type ScannerState = keyof typeof SCANNER_STATE;

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
	];
};

export type Holomem = {
	id: string;
	name: string;
	english_name: string;
	type: string;
	org: string;
	suborg: string;
	group: string;
	top_topics: string[];
	photo: string;
	banner: string;
	twitter: string;
	video_count: string;
	subscriber_count: string;
	view_count: string;
	clip_count: number;
	lang: string;
	published_at: string;
	inactive: boolean;
	description: string;
	twitch: null | string;
};
