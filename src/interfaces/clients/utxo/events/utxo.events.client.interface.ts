import { IBaseEventsClient } from '../../base/base.events.client.interface';

import {
	UtxoBlockNotification,
	UtxoTransactionNotification,
} from '../../../../dtos/utxo/utxo.notification.dtos';

export interface IUtxoEventsClient extends IBaseEventsClient
	<UtxoBlockNotification, UtxoTransactionNotification> {
	configureCoreClient(coreClient: any): void;
}
