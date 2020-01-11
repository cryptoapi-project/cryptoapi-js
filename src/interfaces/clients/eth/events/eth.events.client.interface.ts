import {
	EthBlockNotification,
	EthTransactionNotification,
	EthTransferNotification,
	EthTokenBalanceNotification,
} from '../../../../dtos/eth/eth.notification.dtos';
import { EthTokenSubscription } from '../../../../dtos/eth/eth.subscription.dtos';
import { IBaseEventsClient } from '../../base/base.events.client.interface';

export interface IEthEventsClient extends IBaseEventsClient
	<EthBlockNotification, EthTransactionNotification> {
	onTokenTransfers(
		{ token, address, confirmations }: EthTokenSubscription,
		cb: (notification: EthTransferNotification) => void,
	): Promise<string | number>;

	onTokenBalance(
		{ token, address, confirmations }: EthTokenSubscription,
		cb: (notification: EthTokenBalanceNotification) => void,
	): Promise<string | number>;
}
