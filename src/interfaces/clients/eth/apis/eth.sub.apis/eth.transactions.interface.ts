import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

import { TPaginationOptions } from '../../../../../types/paginations.options.type';

export interface IEthTransactionsApi<
	TTransactionByAddresses, TTransactionsIntersection,
	TFullTransaction, TTransactionsInterAddresses,
	TTransactionReceipt
>  extends IConfigurable<IServerConfig> {
	getTransactionsByAddresses(addresses: string[],	positive?: boolean, options?: TPaginationOptions): Promise<TTransactionByAddresses>;
	getTransactionsIntersection(addresses: string[], options?: TPaginationOptions): Promise<TTransactionsIntersection>;
	getFullTransactionInfo(hash: string): Promise<TFullTransaction>;
	getTransactionsInterAddresses(from: string, to: string, options?: TPaginationOptions): Promise<TTransactionsInterAddresses>;
	getTransactionReceipt(hash: string): Promise<TTransactionReceipt>;
}
