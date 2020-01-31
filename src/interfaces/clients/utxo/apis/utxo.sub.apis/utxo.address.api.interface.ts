import { UtxoAddressHistory } from '@src/dtos/utxo/utxo.address.history';
import { UtxoAddressInfo } from '@src/dtos/utxo/utxo.address.info';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TPaginationOptions } from '@src/types/paginations.options.type';

export interface IUtxoAddressApi extends IConfigurable<IServerConfig> {
	getAddressesInfos(addresses: string[]): Promise<UtxoAddressInfo[]>;
	getAddressesHistory(addresses: string[], options?: TPaginationOptions): Promise<UtxoAddressHistory>;
}
