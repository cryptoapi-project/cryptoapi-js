import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IUtxoRawTransactionApi extends IConfigurable<IServerConfig> {
	sendRawTransaction(tr: string): Promise<string>;
}
