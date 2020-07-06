import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TExternalTransactionsRequest } from '@src/types/eth/external.transactions.request.type';
import { TTransfersRequest } from '@src/types/eth/transfers.request.type';
import { TTrxsBetweenAddressesRequest } from '@src/types/eth/trxs.between.addresses.request.type';
import { TPaginationOptions } from '@src/types/paginations.options.type';

export interface IEthTransactionsApi<
	TTransfers, TTransactionsIntersection,
	TFullTransaction, TTransactionsBetweenAddresses,
	TTransactionReceipt
>  extends IConfigurable<IServerConfig> {
	getTransfers(data: TTransfersRequest, options?: TPaginationOptions): Promise<TTransfers>;
	getExternalTransactions(data: TExternalTransactionsRequest, options?: TPaginationOptions): Promise<TTransactionsIntersection>;
	getTransactions(data: TTrxsBetweenAddressesRequest, options?: TPaginationOptions): Promise<TTransactionsBetweenAddresses>;
	getFullTransaction(hash: string): Promise<TFullTransaction>;
	getTransactionReceipt(hash: string): Promise<TTransactionReceipt>;
}
