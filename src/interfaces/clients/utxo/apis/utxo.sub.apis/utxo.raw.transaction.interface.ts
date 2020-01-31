import { UtxoRawTransaction } from '@src/dtos/utxo/utxo.raw.transaction';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';

export interface IUtxoRawTransactionApi extends IConfigurable<IServerConfig> {
	sendRawTransaction(tr: string): Promise<string>;
	decodeRawTransaction(tr: string): Promise<UtxoRawTransaction> ;
}
