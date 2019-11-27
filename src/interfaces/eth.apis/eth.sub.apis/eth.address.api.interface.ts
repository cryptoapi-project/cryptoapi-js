import { EthAddressBalance } from '../../../dtos/eth.address.balance';
import { EthAddressInfo } from '../../../dtos/eth.adress.info';

import { IServerConfig } from '../../configs/crypto.config.interface';
import { IConfigurable } from '../../configs/configurable.interface';

export interface IEthAddressApi extends IConfigurable<IServerConfig> {
	getAddressesBalances(addresses: string[]): Promise<EthAddressBalance[]>;
	getAddressesInfos(addresses: string[]): Promise<EthAddressInfo[]>;
}
