import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

import {
	EthTransactionByAddresses,
	EthTransactionsIntersection,
	FullEthTransaction,
	EthTransactionsInterAddresses,
	EthTransactionReceipt,
} from '../../../../../dtos/eth/eth.transaction.dtos';
import { TPaginationOptions } from '../../../../../types/paginations.options.type';

export interface IEthTransactionsApi  extends IConfigurable<IServerConfig> {
	getTransactionsByAddresses(addresses: string[],	positive?: boolean, options?: TPaginationOptions): Promise<EthTransactionByAddresses>;
	getTransactionsIntersection(addresses: string[], options?: TPaginationOptions): Promise<EthTransactionsIntersection>;
	getFullTransactionInfo(hash: string): Promise<FullEthTransaction>;
	getTransactionsInterAddresses(from: string, to: string, options?: TPaginationOptions): Promise<EthTransactionsInterAddresses>;
	getTransactionReceipt(hash: string): Promise<EthTransactionReceipt>;
}
