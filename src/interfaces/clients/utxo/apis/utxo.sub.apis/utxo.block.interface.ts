import { UtxoBlockInfo } from '@src/dtos/utxo/utxo.block.dtos';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';

export interface IUtxoBlockApi extends IConfigurable<IServerConfig> {
	getBlocks(requestedBlocks: Array<string|number>): Promise<UtxoBlockInfo[]>;
	getBlock(heightOrHash: string|number): Promise<UtxoBlockInfo>;
}
