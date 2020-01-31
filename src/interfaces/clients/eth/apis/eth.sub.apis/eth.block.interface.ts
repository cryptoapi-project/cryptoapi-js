import { EthBlockInfo, EthBlocksResponse } from '@src/dtos/eth/eth.block.dtos';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TPaginationOptions } from '@src/types/paginations.options.type';

export interface IEthBlockApi extends IConfigurable<IServerConfig> {
	getBlock(blockNumber: number): Promise<EthBlockInfo>;
	getBlocks(options: TPaginationOptions): Promise<EthBlocksResponse>;
}
