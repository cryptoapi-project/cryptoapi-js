import {
	AddressTransactionSubscription,
	TokenTransferSubscription,
	TransactionConrimationSubscription,
} from '../../dtos/event.dtos';

export interface IEthEventsClient {

	close(): void;

	onOpen(): void;

	onClose(): void;

	unsubscribe(id: number): boolean;

	onBlock(confirmations: number, cb: Function): number;

	onAddressTransactions({ address, confirmations }: AddressTransactionSubscription, cb: Function): number;

	onTokenTransfers({ token, address, confirmations }: TokenTransferSubscription, cb: Function): number;

	onTransactionConrimations({ hash, confirmations }: TransactionConrimationSubscription, cb: Function): number;

}
