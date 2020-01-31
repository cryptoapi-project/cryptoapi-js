import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

import { TPaginationOptions } from '../../../../../types/paginations.options.type';

export interface IEthBlockApi<TBlockInfo, TBlocksResponse> extends IConfigurable<IServerConfig> {
	getBlock(blockNumberOrHash: number | string): Promise<TBlockInfo>;
	getBlocks(options: TPaginationOptions): Promise<TBlocksResponse>;
}
