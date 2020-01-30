import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IEthAddressApi<TAddressBalance, AddressInfo> extends IConfigurable<IServerConfig> {
	getAddressesBalances(addresses: string[]): Promise<TAddressBalance[]>;
	getAddressesInfos(addresses: string[]): Promise<AddressInfo[]>;
}
