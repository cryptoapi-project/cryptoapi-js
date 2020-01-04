import { UtxoBlockInfo } from '../../../../../dtos/utxo/utxo.block.dtos';

import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { IConfigurable } from '../../../../configs/configurable.interface';

export interface IUtxoBlockApi extends IConfigurable<IServerConfig> {
	getBlocks(requestedBlocks: Array<string|number>): Promise<UtxoBlockInfo[]>;
	getBlock(heightOrHash: string|number): Promise<UtxoBlockInfo>;
}
