import { EthTokenInfo } from '../../../dtos/eth/eth.token.info';
import { EthTokenBalance } from '../../../dtos/eth/eth.token.balance';
import { EthTokensByHolder } from '../../../dtos/eth/eth.tokens.by.holder';
import { PaginationOptions } from '../../../dtos/paginations.options';

import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

export interface IEthTokenApi  extends IConfigurable<IServerConfig> {
	getTokenInfoByTokenAddress(address: string): Promise<EthTokenInfo>;
	getTokenBalanceByAddresses(tokenAddress: string, holderAddress: string): Promise<EthTokenBalance>;
	getTokensBalancesByHolderAddress(address: string, options?: PaginationOptions): Promise<EthTokensByHolder>;
}
