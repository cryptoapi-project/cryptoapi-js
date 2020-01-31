import { UtxoNetworkInfo } from '@src/dtos/utxo/utxo.network.info';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';

export interface IUtxoMainInfoApi extends IConfigurable<IServerConfig> {
	getNetworkInfo(): Promise<UtxoNetworkInfo>;
}
