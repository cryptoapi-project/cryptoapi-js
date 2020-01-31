import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';

export interface IEthRawTransactionApi<TRawTransaction> extends IConfigurable<IServerConfig> {
	sendRawTransaction(tr: string): Promise<string>;
	decodeRawTransaction(tr: string): Promise<TRawTransaction> ;
}
