import { EthBlockInfo } from '../../../../../dtos/eth/eth.block.dtos';

import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { IConfigurable } from '../../../../configs/configurable.interface';

export interface IEthBlockApi extends IConfigurable<IServerConfig> {
	getBlock(blockNumber: number): Promise<EthBlockInfo>;
}
