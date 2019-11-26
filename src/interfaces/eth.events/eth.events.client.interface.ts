import {
	AddressTransactionSubscription,
	TokenTransferSubscription,
	TransactionConrimationSubscription,
} from '../../dtos/event.dtos';
import { IEventsConfig } from '../configs/crypto.config.interface';

export interface IEthEventsClient {

	connected: boolean;

	connect(options: IEventsConfig): void;

	reconnect(): void;

	close(): void;

	onConnected(cb: () => void): void;

	onDisconnected(cb: () => void): void;

	unsubscribe(id: number): boolean;

	onBlock(confirmations: number, cb: () => void): number;

	onAddressTransactions({ address, confirmations }: AddressTransactionSubscription, cb: () => void): number;

	onTokenTransfers({ token, address, confirmations }: TokenTransferSubscription, cb: () => void): number;

	onTransactionConrimations({ hash, confirmations }: TransactionConrimationSubscription, cb: () => void): number;

}
