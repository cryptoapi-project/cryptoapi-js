export interface IEthEventsClient {
	close(): void;

	subscribeBlock(countConfirmation: number, eventId: number): void;
	unsubscribeBlock(countConfirmation: number, eventId: number): void;
	onMessageBlock(cb: () => void): void;

	// subscribeTransaction(params: any[]): void;
	// unsubscribeTransaction(): void;
	// onMessageTransaction(): void;
	//
	// subscribeTransfer(params: any[]): void;
	// unsubscribeTransfer(): void;
	// onMessageTransfer(): void;
}
