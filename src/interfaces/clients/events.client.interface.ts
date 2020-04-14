import { IConfigurable } from '../configs/configurable.interface';
import { ICryptoConfig } from '../configs/crypto.config.interface';
import { IEthEvents } from './eth/events/eth.events.interface';
import { IKlayEvents } from './klay/events/klay.events.interface';
import { IUtxoEvents } from './utxo/events/utxo.events.client.interface';

export interface IEventsClient extends IConfigurable<ICryptoConfig>  {
	eth: IEthEvents;
	klay: IKlayEvents;
	btc: IUtxoEvents;
	bch: IUtxoEvents;
	ltc: IUtxoEvents;
}
