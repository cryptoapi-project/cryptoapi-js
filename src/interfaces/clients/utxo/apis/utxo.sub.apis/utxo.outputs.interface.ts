import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { TUtxoOutputsOptions } from '../../../../../types/utxo/utxo.outputs.options';
import { UtxoOutput } from '../../../../../dtos/utxo/utxo.output';

export interface IUtxoOutputsApi extends IConfigurable<IServerConfig> {
	getOutputsByAddresses(addresses: string[], options: TUtxoOutputsOptions): Promise<UtxoOutput[]>;
}
