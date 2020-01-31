import { EthTokenBalance } from '@src/dtos/eth/eth.token.balance';
import { EthTokenInfo } from '@src/dtos/eth/eth.token.info';
import { EthTokenSearchResponse } from '@src/dtos/eth/eth.token.search';
import { EthTokenBalanceByHoldersOut } from '@src/dtos/eth/eth.tokens.by.holders';
import {
	EthTokenTransfersByAddressesRequest,
	EthTokenTransfersRequest,
	EthTokenTransfersResponse,
} from '@src/dtos/eth/eth.transfer.dto';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TTokenSearchRequest } from '@src/types/eth/token.search.request.type';
import { TPaginationOptions } from '@src/types/paginations.options.type';

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
