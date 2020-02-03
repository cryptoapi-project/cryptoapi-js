import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { THistoryRequest } from '@src/types/eth/history.request.type';
import { TrxsBetweenAddressesRequest } from '@src/types/eth/trxs.between.addresses.request.type';
import { TPaginationOptions } from '@src/types/paginations.options.type';

export interface IEthTransactionsApi<
	TTransferHistory, TTransactionsIntersection,
	TFullTransaction, TTransactionsBetweenAddresses,
	TTransactionReceipt
>  extends IConfigurable<IServerConfig> {
	getTransfersHistory(data: THistoryRequest, options?: TPaginationOptions): Promise<TTransferHistory>;
	getExternalTransactionsHistory(addresses: string[], options?: TPaginationOptions): Promise<TTransactionsIntersection>;
	getTransactionsBetweenAddresses(data: TrxsBetweenAddressesRequest, options?: TPaginationOptions): Promise<TTransactionsBetweenAddresses>;
	getFullTransaction(hash: string): Promise<TFullTransaction>;
	getTransactionReceipt(hash: string): Promise<TTransactionReceipt>;
}
