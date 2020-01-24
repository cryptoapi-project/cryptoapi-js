import { IBaseEventsClient } from './base.events.client.interface';
import {
	TokenSubscription,
	ContractLogSubscription,
} from '../../../dtos/base/event.subscription.dtos';
import {
	TransferNotification,
	TokenBalanceNotification,
	ContractLogNotification,
} from '../../../dtos/base/event.notification.dtos';

export interface IBaseContractEventsClient<BlockNotification, TransactionNotification>
	extends IBaseEventsClient<BlockNotification, TransactionNotification> {

	onTokenTransfers(
		{ confirmations, address, token }: TokenSubscription,
		cb: (notification: TransferNotification) => void,
	): Promise<string | number>;

	onTokenBalance(
		{ confirmations, address, token }: TokenSubscription,
		cb: (notification: TokenBalanceNotification) => void,
	): Promise<string | number>;

	onContractLog(
		info: ContractLogSubscription,
		cb: (notification: ContractLogNotification) => void,
	): Promise<string | number>;

}
