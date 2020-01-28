import { UtxoOutput } from '../../../../../dtos/utxo/utxo.output';
import { TUtxoOutputsOptions } from '../../../../../types/utxo/utxo.outputs.options';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IUtxoOutputsApi extends IConfigurable<IServerConfig> {
	getOutputsByAddresses(addresses: string[], options: TUtxoOutputsOptions): Promise<UtxoOutput[]>;
}
