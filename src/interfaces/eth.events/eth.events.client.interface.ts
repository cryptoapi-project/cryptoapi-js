import {
	AddressTransactionSubscription,
	TokenTransferSubscription,
	TransactionConrimationSubscription,
} from '../../dtos/event.dtos';
import { IEthEventsConfig } from '../configs/events.config.interface';

export interface IEthEventsClient {

	connected: boolean;

	connect(options: IEthEventsConfig): void;

	reconnect(): void;

	close(): void;

	onConnected(cb: Function): void;

	onDisconnected(cb: Function): void;

	unsubscribe(id: number): boolean;

	onBlock(confirmations: number, cb: Function): number;

	onAddressTransactions({ address, confirmations }: AddressTransactionSubscription, cb: Function): number;

	onTokenTransfers({ token, address, confirmations }: TokenTransferSubscription, cb: Function): number;

	onTransactionConrimations({ hash, confirmations }: TransactionConrimationSubscription, cb: Function): number;

}
