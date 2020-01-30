import { UtxoAddressHistory } from '../../../../../dtos/utxo/utxo.address.history';
import { UtxoAddressInfo } from '../../../../../dtos/utxo/utxo.address.info';
import { TPaginationOptions } from '../../../../../types/paginations.options.type';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IUtxoAddressApi extends IConfigurable<IServerConfig> {
	getAddressesInfos(addresses: string[]): Promise<UtxoAddressInfo[]>;
	getAddressesHistory(addresses: string[], options?: TPaginationOptions): Promise<UtxoAddressHistory>;
}
