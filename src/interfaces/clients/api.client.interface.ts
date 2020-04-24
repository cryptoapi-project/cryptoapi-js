import { IHooksClient } from '@src/interfaces/clients/hooks.client.interface';

import { IConfigurable } from '../configs/configurable.interface';
import { ICryptoConfig } from '../configs/crypto.config.interface';
import { IEthApi } from './eth/apis/eth.api.interface';
import { IKlayApi } from './klay/apis/klay.api.interface';
import { IUtxoApi } from './utxo/apis/utxo.api.client.interface';

export interface IApiClient extends IConfigurable<ICryptoConfig> {
	eth: IEthApi;
	klay: IKlayApi;
	btc: IUtxoApi;
	bch: IUtxoApi;
	ltc: IUtxoApi;
	hooks: IHooksClient;
}
