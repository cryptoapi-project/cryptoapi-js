import { FullUtxoTransaction, Transactions } from '@src/dtos/utxo/utxo.transaction.dtos';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TPaginationOptions } from '@src/types/paginations.options.type';
import { TTransactionsRequest } from '@src/types/utxo/utxo.transactions.request';

export interface IUtxoTransactionsApi extends IConfigurable<IServerConfig> {
	getFullTransactionInfo(hash: string): Promise<FullUtxoTransaction>;
	getTransactions(params?: TTransactionsRequest, options?: TPaginationOptions): Promise<Transactions>;
}
