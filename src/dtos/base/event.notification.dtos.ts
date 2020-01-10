export class TransactionConfirmationNotification {

	hash: string;
	confirmations: number;

	constructor(notification: {
		hash: string;
		confirmations: number;
	}) {
		this.hash = notification.hash;
		this.confirmations = notification.confirmations;
	}

}
