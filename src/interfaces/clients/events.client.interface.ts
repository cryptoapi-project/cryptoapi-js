import { IConfigurable } from '../configs/configurable.interface';
import { ICryptoConfig } from '../configs/crypto.config.interface';
import { IEthEventsClient } from './eth/events/eth.events.client.interface';
import { IKlayEventsClient } from './klay/events/klay.events.client.interface';
import { IUtxoEventsClient } from './utxo/events/utxo.events.client.interface';

export interface IEventsClient extends IConfigurable<ICryptoConfig>  {
	eth: IEthEventsClient;
	klay: IKlayEventsClient;
	btc: IUtxoEventsClient;
	bch: IUtxoEventsClient;
}
