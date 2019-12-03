import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';
import { EthRawTransaction } from '../../../dtos/eth/eth.raw.transaction';

export interface IEthRawTransactionApi extends IConfigurable<IServerConfig> {
	sendRawTransaction(tx: string): Promise<string>;
	decodeRawTransaction(tr: string): Promise<EthRawTransaction> ;
}
