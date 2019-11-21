import {
	AddressTransactionSubscription,
	TokenTransferSubscription,
	TransactionConrimationSubscription,
} from '../../dtos/event.dtos';
import { IEventsConfig } from '../configs/events.config.interface';

export interface IEthEventsClient {

	connected: boolean;

	connect(options: IEventsConfig): void;

	reconnect(): void;

	close(): void;

	unsubscribe(id: number): boolean;

	onBlock(confirmations: number, cb: Function): number;

	onAddressTransactions({ address, confirmations }: AddressTransactionSubscription, cb: Function): number;

	onTokenTransfers({ token, address, confirmations }: TokenTransferSubscription, cb: Function): number;

	onTransactionConrimations({ hash, confirmations }: TransactionConrimationSubscription, cb: Function): number;

}
