import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

import {
	EthTransactionByAddresses,
	EthTransactionsIntersection,
	FullEthTransaction,
	EthTransactionsInterAddresses,
} from '../../../dtos/eth/eth.transaction.dtos';

import { PaginationOptions } from '../../../dtos/paginations.options';

export interface IEthTransactionsApi  extends IConfigurable<IServerConfig> {
	getTransactionsByAddresses(addresses: string[],	positive?: boolean, options?: PaginationOptions): Promise<EthTransactionByAddresses>;
	getTransactionsIntersection(addresses: string[], options?: PaginationOptions): Promise<EthTransactionsIntersection>;
	getFullTransactionInfo(hash: string): Promise<FullEthTransaction>;
	getTransactionsInterAddresses(from: string, to: string, options?: PaginationOptions): Promise<EthTransactionsInterAddresses>;
}
