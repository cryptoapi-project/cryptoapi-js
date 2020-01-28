import { UtxoBlockInfo } from '../../../../../dtos/utxo/utxo.block.dtos';

import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IUtxoBlockApi extends IConfigurable<IServerConfig> {
	getBlocks(requestedBlocks: Array<string|number>): Promise<UtxoBlockInfo[]>;
	getBlock(heightOrHash: string|number): Promise<UtxoBlockInfo>;
}
