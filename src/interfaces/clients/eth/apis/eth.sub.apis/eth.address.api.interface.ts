import { EthAddressBalance } from '../../../../../dtos/eth/eth.address.balance';
import { EthAddressInfo } from '../../../../../dtos/eth/eth.address.info';

import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IEthAddressApi extends IConfigurable<IServerConfig> {
	getAddressesBalances(addresses: string[]): Promise<EthAddressBalance[]>;
	getAddressesInfos(addresses: string[]): Promise<EthAddressInfo[]>;
}
