import { TransactionConfirmationNotification } from '../../../dtos/base/event.notification.dtos';
import { AddressSubscription, TransactionConfirmationSubscription } from '../../../dtos/base/event.subscription.dtos';
import { IConfigurable } from '../../configs/configurable.interface';
import { IEventsConfig } from '../../configs/crypto.config.interface';

export interface IBaseEventsClient<BlockNotification, TransactionNotification> extends IConfigurable<IEventsConfig> {

	connected: boolean;

	connect(): void;

	reconnect(): void;

	disconnect(): void;

	onConnected(cb: () => void): void;

	onDisconnected(cb: () => void): void;

	unsubscribe(param: number | string | ((notification: any) => void)): Promise<boolean>;

	onBlock(confirmations: number, cb: (notification: BlockNotification) => void): Promise<string | number>;

	onAddressTransactions(
		{ address, confirmations }: AddressSubscription,
		cb: (notification: TransactionNotification) => void,
	): Promise<string | number>;

	onTransactionConfirmations(
		{ hash, confirmations }: TransactionConfirmationSubscription,
		cb: (notification: TransactionConfirmationNotification) => void,
	): Promise<string | number>;
}
