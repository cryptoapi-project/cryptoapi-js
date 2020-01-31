
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TTokenSearchRequest } from '@src/types/eth/token.search.request.type';
import {
	TTokenTransfersByAddressesRequest, TTokenTransfersRequest,
} from '@src/types/eth/token.transfer.request.type';
import { TPaginationOptions } from '@src/types/paginations.options.type';

export interface IEthTokenApi<
	TTokenInfo,
	TTokenBalanceByHoldersOut,
	TTokenSearchResponse,
	TTokenTransfersResponse
	> extends IConfigurable<IServerConfig> {
	getTokenInfoByTokenAddress(address: string): Promise<TTokenInfo>;
	getTokenBalanceByAddresses(tokenAddress: string, holderAddresses: string[]): Promise<TTokenBalanceByHoldersOut>;
	getTokenBalancesByHolders(holders: string[], options?: TPaginationOptions): Promise<TTokenBalanceByHoldersOut>;
	searchToken(searchRequest: TTokenSearchRequest, options?: TPaginationOptions): Promise<TTokenSearchResponse>;
	getTokenTransfers(transfersRequest: TTokenTransfersRequest, options?: TPaginationOptions): Promise<TTokenTransfersResponse>;
	getTokenTransfersByAddresses(
		transfersRequest: TTokenTransfersByAddressesRequest,
		options?: TPaginationOptions,
	): Promise<TTokenTransfersResponse>;
}
