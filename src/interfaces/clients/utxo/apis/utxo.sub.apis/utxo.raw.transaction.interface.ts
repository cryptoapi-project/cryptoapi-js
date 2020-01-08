import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { UtxoRawTransaction } from '../../../../../dtos/utxo/utxo.raw.transaction';

export interface IUtxoRawTransactionApi extends IConfigurable<IServerConfig> {
	sendRawTransaction(tr: string): Promise<string>;
	decodeRawTransaction(tr: string): Promise<UtxoRawTransaction> ;
}
