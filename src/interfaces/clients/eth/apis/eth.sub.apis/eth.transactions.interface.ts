import {
	EthTransactionByAddresses,
	EthTransactionReceipt,
	EthTransactionsInterAddresses,
	EthTransactionsIntersection,
	FullEthTransaction,
} from '@src/dtos/eth/eth.transaction.dtos';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TPaginationOptions } from '@src/types/paginations.options.type';

export interface IEthTransactionsApi  extends IConfigurable<IServerConfig> {
	getTransactionsByAddresses(addresses: string[],	positive?: boolean, options?: TPaginationOptions): Promise<EthTransactionByAddresses>;
	getTransactionsIntersection(addresses: string[], options?: TPaginationOptions): Promise<EthTransactionsIntersection>;
	getFullTransactionInfo(hash: string): Promise<FullEthTransaction>;
	getTransactionsInterAddresses(from: string, to: string, options?: TPaginationOptions): Promise<EthTransactionsInterAddresses>;
	getTransactionReceipt(hash: string): Promise<EthTransactionReceipt>;
}
