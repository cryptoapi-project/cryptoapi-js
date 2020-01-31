import { UtxoOutput } from '@src/dtos/utxo/utxo.output';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TUtxoOutputsOptions } from '@src/types/utxo/utxo.outputs.options';

export interface IUtxoOutputsApi extends IConfigurable<IServerConfig> {
	getOutputsByAddresses(addresses: string[], options: TUtxoOutputsOptions): Promise<UtxoOutput[]>;
}
