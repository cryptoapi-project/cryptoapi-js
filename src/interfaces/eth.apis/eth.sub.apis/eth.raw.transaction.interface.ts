import { EthRawTransaction } from '../../../dtos/eth/eth.raw.transaction';

import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

export interface IEthRawTransactionApi  extends IConfigurable<IServerConfig> {
	decodeRawTransaction(tr: string): Promise<EthRawTransaction> ;
}
