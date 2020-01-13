import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { FullUtxoTransaction, Transactions } from '../../../../../dtos/utxo/utxo.transaction.dtos';
import { TPaginationOptions } from '../../../../../types/paginations.options.type';
import { TTransactionsRequest } from '../../../../../types/utxo/utxo.transactions.request';

export interface IUtxoTransactionsApi extends IConfigurable<IServerConfig> {
	getFullTransactionInfo(hash: string): Promise<FullUtxoTransaction>;
	getTransactions(params?: TTransactionsRequest, options?: TPaginationOptions): Promise<Transactions>;
}
