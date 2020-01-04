import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { UtxoNetworkInfo } from '../../../../../dtos/utxo/utxo.network.info';

export interface IUtxoMainInfoApi extends IConfigurable<IServerConfig> {
	getNetworkInfo(): Promise<UtxoNetworkInfo>;
}
