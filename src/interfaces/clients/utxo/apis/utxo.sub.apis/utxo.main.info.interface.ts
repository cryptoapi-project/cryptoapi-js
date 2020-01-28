import { UtxoNetworkInfo } from '../../../../../dtos/utxo/utxo.network.info';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IUtxoMainInfoApi extends IConfigurable<IServerConfig> {
	getNetworkInfo(): Promise<UtxoNetworkInfo>;
}
