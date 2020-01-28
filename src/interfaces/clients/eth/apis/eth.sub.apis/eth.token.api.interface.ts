import { EthTokenBalance } from '../../../../../dtos/eth/eth.token.balance';
import { EthTokenInfo } from '../../../../../dtos/eth/eth.token.info';
import { EthTokenSearchResponse } from '../../../../../dtos/eth/eth.token.search';
import {
	EthTokenTransfersByAddressesRequest,
	EthTokenTransfersRequest,
	EthTokenTransfersResponse,
} from '../../../../../dtos/eth/eth.transfer.dto';

import { EthTokenBalanceByHoldersOut } from '../../../../../dtos/eth/eth.tokens.by.holders';
import { TTokenSearchRequest } from '../../../../../types/eth/token.search.request.type';
import { TPaginationOptions } from '../../../../../types/paginations.options.type';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IEthTokenApi extends IConfigurable<IServerConfig> {
	getTokenInfoByTokenAddress(address: string): Promise<EthTokenInfo>;
	getTokenBalanceByAddresses(tokenAddress: string, holderAddresses: string[]): Promise<EthTokenBalance>;
	getTokenBalancesByHolders(holders: string[], options?: TPaginationOptions): Promise<EthTokenBalanceByHoldersOut>;
	searchToken(searchRequest: TTokenSearchRequest, options?: TPaginationOptions): Promise<EthTokenSearchResponse>;
	getTokenTransfers(transfersRequest: EthTokenTransfersRequest, options?: TPaginationOptions): Promise<EthTokenTransfersResponse>;
	getTokenTransfersByAddresses(
		transfersRequest: EthTokenTransfersByAddressesRequest,
		options?: TPaginationOptions,
	): Promise<EthTokenTransfersResponse>;
}
