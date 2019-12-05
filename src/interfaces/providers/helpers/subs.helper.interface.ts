export interface ISubsHelper {
	validateConfirmations(confirmations: number): void;
	validateAddress(address: string, key?: string): void;
	validateHash(hash: string): void;
	validateCallback(cb: (notification: any) => void): void;
}
