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

export class BalanceNotification {

	address: string;
	balance: string;

	constructor(notification: {
		address: string;
		balance: string;
	}) {
		this.address = notification.address;
		this.balance = notification.balance;
	}

}
