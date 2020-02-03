import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TPaginationOptions } from '@src/types/paginations.options.type';

export interface IEthBlockApi<TBlockInfo, TBlocksResponse> extends IConfigurable<IServerConfig> {
	getBlock(blockNumberOrHash: number | string): Promise<TBlockInfo>;
	getBlocks(options: TPaginationOptions): Promise<TBlocksResponse>;
}
