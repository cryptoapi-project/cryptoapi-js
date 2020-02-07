import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';

import { IUtxoAddressApi } from './utxo.sub.apis/utxo.address.api.interface';
import { IUtxoBlockApi } from './utxo.sub.apis/utxo.block.interface';
import { IUtxoMainInfoApi } from './utxo.sub.apis/utxo.main.info.interface';
import { IUtxoOutputsApi } from './utxo.sub.apis/utxo.outputs.interface';
import { IUtxoRawTransactionApi } from './utxo.sub.apis/utxo.raw.transaction.interface';
import { IUtxoTransactionsApi } from './utxo.sub.apis/utxo.transactions.interface';

export interface IUtxoApiClient extends
	IUtxoMainInfoApi,
	IUtxoBlockApi,
	IUtxoRawTransactionApi,
	IUtxoTransactionsApi,
	IUtxoAddressApi,
	IUtxoOutputsApi,
	IConfigurable<IServerConfig> {
}

export interface IUtxoApi extends IUtxoApiClient {
	testnet: IUtxoApiClient;
}
