import { EthTokenInfo } from '../../../../../dtos/eth/eth.token.info';
import { EthTokenBalance } from '../../../../../dtos/eth/eth.token.balance';
import { EthTokensByHolder } from '../../../../../dtos/eth/eth.tokens.by.holder';
import { EthTokenSearchResponse } from '../../../../../dtos/eth/eth.token.search';
import { EthTokenTransfersResponse } from '../../../../../dtos/eth/eth.transfer.dto';

import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { TPaginationOptions } from '../../../../../types/paginations.options.type';
import { TTokenSearchRequest } from '../../../../../types/eth/token.search.request.type';

export interface IEthTokenApi extends IConfigurable<IServerConfig> {
	getTokenInfoByTokenAddress(address: string): Promise<EthTokenInfo>;
	getTokenBalanceByAddresses(tokenAddress: string, holderAddress: string): Promise<EthTokenBalance>;
	getTokensBalancesByHolderAddress(address: string, options?: TPaginationOptions): Promise<EthTokensByHolder>;
	searchToken(searchRequest: TTokenSearchRequest, options?: TPaginationOptions): Promise<EthTokenSearchResponse>;
	getTokenTransfers(tokenAddress: string, addresses: string[], options?: TPaginationOptions): Promise<EthTokenTransfersResponse>;
}
