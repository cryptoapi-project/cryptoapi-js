import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { UtxoAddressInfo } from '../../../../../dtos/utxo/utxo.address.info';

export interface IUtxoAddressApi extends IConfigurable<IServerConfig> {
	getAddressesInfos(addresses: string[]): Promise<UtxoAddressInfo[]>;
}
