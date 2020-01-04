import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { FullUtxoTransaction } from '../../../../../dtos/utxo/utxo.transaction.dtos';

export interface IUtxoTransactionsApi extends IConfigurable<IServerConfig> {
	getFullTransactionInfo(hash: string): Promise<FullUtxoTransaction>;
	getTransactionsByBlockHeightOrHash(blockHeightOrHash: string|number): Promise<FullUtxoTransaction[]>;
	getTransactionsByHashes(hashes: string[]): Promise<FullUtxoTransaction[]>;
}
