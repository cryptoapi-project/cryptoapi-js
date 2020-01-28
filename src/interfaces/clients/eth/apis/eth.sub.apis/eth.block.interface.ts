import { EthBlockInfo, EthBlocksResponse } from '../../../../../dtos/eth/eth.block.dtos';

import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

import { TPaginationOptions } from '../../../../../types/paginations.options.type';

export interface IEthBlockApi extends IConfigurable<IServerConfig> {
	getBlock(blockNumber: number): Promise<EthBlockInfo>;
	getBlocks(options: TPaginationOptions): Promise<EthBlocksResponse>;
}
