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

	connect(token: string | null, options: IEventsConfig): void;

	reconnect(): void;

	close(): void;

	onConnected(cb: () => void): void;

	onDisconnected(cb: () => void): void;

	unsubscribe(id: number): Promise<boolean>;

	onBlock(confirmations: number, cb: (notification: EthBlockNotification) => void): Promise<string | number>;

	onAddressTransactions(
		{ address, confirmations }: EthAddressTransactionSubscription,
		cb: (notification: EthTransactionNotification) => void,
	): Promise<string | number>;

	onTokenTransfers(
		{ token, address, confirmations }: EthTokenTransferSubscription,
		cb: (notification: EthTransferNotification) => void,
	): Promise<string | number>;

	onTransactionConfirmations(
		{ hash, confirmations }: EthTransactionConfirmationSubscription,
		cb: (notification: EthTransactionConfirmationNotification) => void,
	): Promise<string | number>;

}
