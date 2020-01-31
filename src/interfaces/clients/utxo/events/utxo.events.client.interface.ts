import {
	UtxoBlockNotification,
	UtxoTransactionNotification,
} from '@src/dtos/utxo/utxo.notification.dtos';
import { IBaseEventsClient } from '@src/interfaces/clients/base.events.client/base.events.client.interface';

export interface IUtxoEventsClient extends IBaseEventsClient
	<UtxoBlockNotification, UtxoTransactionNotification> {
	configureCoreClient(coreClient: any): void;
}
