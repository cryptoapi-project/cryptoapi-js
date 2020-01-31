import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';

export interface IEthAddressApi extends IConfigurable<IServerConfig> {
	getAddressesBalances(addresses: string[]): Promise<EthAddressBalance[]>;
	getAddressesInfos(addresses: string[]): Promise<EthAddressInfo[]>;
}
