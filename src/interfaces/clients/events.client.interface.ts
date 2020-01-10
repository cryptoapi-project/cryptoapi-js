import { IEthEventsClient } from './eth/events/eth.events.client.interface';
import { IConfigurable } from '../configs/configurable.interface';
import { ICryptoConfig } from '../configs/crypto.config.interface';
import { IUtxoEventsClient } from './utxo/events/utxo.events.client.interface';

export interface IEventsClient extends IConfigurable<ICryptoConfig>  {
	eth: IEthEventsClient;
	btc: IUtxoEventsClient;
}
