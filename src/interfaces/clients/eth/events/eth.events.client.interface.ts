import {
	EthBlockNotification,
	EthTransactionNotification,
	EthTransferNotification,
} from '../../../../dtos/eth/eth.notification.dtos';
import { EthTokenTransferSubscription } from '../../../../dtos/eth/eth.subscription.dtos';
import { IBaseEventsClient } from '../../base/base.events.client.interface';

export interface IEthEventsClient extends IBaseEventsClient
	<EthBlockNotification, EthTransactionNotification> {
	onTokenTransfers({ token, address, confirmations }: EthTokenTransferSubscription,
		cb: (notification: EthTransferNotification) => void,
	): Promise<string | number>;
}
