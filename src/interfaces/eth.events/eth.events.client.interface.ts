import {
	EthAddressTransactionSubscription,
	EthTokenTransferSubscription,
	EthTransactionConfirmationSubscription,
} from '../../dtos/eth/eth.subscription.dtos';
import {
	EthBlockNotification,
	EthTransactionNotification,
	EthTransferNotification,
	EthTransactionConfirmationNotification,
} from '../../dtos/eth/eth.notification.dtos';

import { IEventsConfig } from '../configs/crypto.config.interface';

export interface IEthEventsClient {

	connected: boolean;

	connect(options: IEventsConfig): void;

	reconnect(): void;

	close(): void;

	onConnected(cb: () => void): void;

	onDisconnected(cb: () => void): void;

	unsubscribe(id: number): boolean;

	onBlock(confirmations: number, cb: (notification: EthBlockNotification) => void): number;

	onAddressTransactions(
		{ address, confirmations }: EthAddressTransactionSubscription,
		cb: (notification: EthTransactionNotification) => void,
	): number;

	onTokenTransfers(
		{ token, address, confirmations }: EthTokenTransferSubscription,
		cb: (notification: EthTransferNotification) => void,
	): number;

	onTransactionConfirmations(
		{ hash, confirmations }: EthTransactionConfirmationSubscription,
		cb: (notification: EthTransactionConfirmationNotification) => void,
	): number;

}
