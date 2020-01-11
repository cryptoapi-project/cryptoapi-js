import { IConfigurable } from '../configs/configurable.interface';
import { ICryptoConfig } from '../configs/crypto.config.interface';

import { IEthApiClient } from './eth/apis/eth.api.client.interface';
import { IUtxoApiClient } from './utxo/apis/utxo.api.client.interface';

export interface IApiClient extends IConfigurable<ICryptoConfig> {
	eth: IEthApiClient;
	btc: IUtxoApiClient;
	bch: IUtxoApiClient;
}
