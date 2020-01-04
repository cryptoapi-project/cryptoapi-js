import { IConfigurable } from '../../../configs/configurable.interface';
import { IServerConfig } from '../../../configs/crypto.config.interface';
import { IUtxoMainInfoApi } from './utxo.sub.apis/utxo.main.info.interface';

export interface IUtxoApiClient extends
	IUtxoMainInfoApi,
	IConfigurable<IServerConfig> {
}
