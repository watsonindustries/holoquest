export type Stamp = {
	id: number;
	name: string;
	hash: string;
};

export type Toast = {
	type: 'success' | 'error';
	message: string;
};

export type ScannerState = 'scanning' | 'stopped';