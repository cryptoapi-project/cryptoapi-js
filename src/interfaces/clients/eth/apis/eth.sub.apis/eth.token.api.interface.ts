import { EthTokenInfo } from '../../../../../dtos/eth/eth.token.info';
import { EthTokenBalance } from '../../../../../dtos/eth/eth.token.balance';
import { EthTokenSearchResponse } from '../../../../../dtos/eth/eth.token.search';
import {
	EthTokenTransfersByAddressesRequest,
	EthTokenTransfersRequest,
	EthTokenTransfersResponse,
} from '../../../../../dtos/eth/eth.transfer.dto';

import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { TPaginationOptions } from '../../../../../types/paginations.options.type';
import { TTokenSearchRequest } from '../../../../../types/eth/token.search.request.type';
import { EthTokenBalanceByHoldersOut } from '../../../../../dtos/eth/eth.tokens.by.holders';

export interface IEthTokenApi extends IConfigurable<IServerConfig> {
	getTokenInfoByTokenAddress(address: string): Promise<EthTokenInfo>;
	getTokenBalanceByAddresses(tokenAddress: string, holderAddress: string): Promise<EthTokenBalance>;
	getTokenBalancesByHolders(holders: string[], options?: TPaginationOptions): Promise<EthTokenBalanceByHoldersOut>;
	searchToken(searchRequest: TTokenSearchRequest, options?: TPaginationOptions): Promise<EthTokenSearchResponse>;
	getTokenTransfers(transfersRequest: EthTokenTransfersRequest, options?: TPaginationOptions): Promise<EthTokenTransfersResponse>;
	getTokenTransfersByAddresses(
		transfersRequest: EthTokenTransfersByAddressesRequest,
		options?: TPaginationOptions,
	): Promise<EthTokenTransfersResponse>;
}
