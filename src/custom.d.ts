export type Stamp = {
	id: number;
	name: string;
	hash: string;
};

export type ToastType = 'success' | 'error';

export type Toast = {
	type: ToastType;
	message: string;
};

export type ScannerState = 'scanning' | 'stopped';
