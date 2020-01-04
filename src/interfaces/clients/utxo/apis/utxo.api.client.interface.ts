import { IConfigurable } from '../../../configs/configurable.interface';
import { IServerConfig } from '../../../configs/crypto.config.interface';
import { IUtxoBlockApi } from './utxo.sub.apis/utxo.block.interface';
import { IUtxoMainInfoApi } from './utxo.sub.apis/utxo.main.info.interface';
import { IUtxoTransactionsApi } from './utxo.sub.apis/utxo.transactions.interface';
import { IUtxoAddressApi } from './utxo.sub.apis/utxo.address.api.interface';

export interface IUtxoApiClient extends
	IUtxoMainInfoApi,
	IUtxoBlockApi,
	IUtxoTransactionsApi,
	IUtxoAddressApi,
	IConfigurable<IServerConfig> {
}
