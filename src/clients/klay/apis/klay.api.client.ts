import { inject, injectable } from 'inversify';

import { BaseEthApiClient } from '@src/clients/eth/apis/eth.api.client';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { KlayContract, KlayContractLog } from '@src/dtos/klay/klay.contract';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayRawTransaction } from '@src/dtos/klay/klay.raw.transaction';
import {
	KlayExternalTransactions,
	KlayFullTransaction,
	KlayTransactionReceipt, KlayTransactionsBetweenAddresses,
	KlayTransfers,
} from '@src/dtos/klay/klay.transaction';
import { IEthAddressApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IEthBlockApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IEthContractApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { IEthMainInfoApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.main.info.interface';
import { IEthNotifyApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { IEthTokenApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';
import { IKlayApiFactoryDto } from '@src/interfaces/clients/klay/apis/klay.api.factory.dto.interface';

@injectable()
export class KlayApiClient extends BaseEthApiClient<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayContract, KlayContractLog,
	KlayRawTransaction,
	KlayTransfers, KlayExternalTransactions,
	KlayFullTransaction, KlayTransactionsBetweenAddresses,
	KlayTransactionReceipt
> {
	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) mainInfo: IEthMainInfoApi<KlayNetworkInfo, EstimateGasResponse>,
		@inject(TYPES_DI.IEthTokenApi) tokenInfo: IEthTokenApi,
		@inject(TYPES_DI.IEthAddressApi) addressInfo: IEthAddressApi<KlayAddressBalance, KlayAddressInfo>,
		@inject(TYPES_DI.IEthContractApi) contractApi: IEthContractApi<KlayContract, KlayContractLog>,
		@inject(TYPES_DI.IEthNotifyApi) notifyApi: IEthNotifyApi,
		@inject(TYPES_DI.IEthRawTransactionApi) rawTransactionApi: IEthRawTransactionApi<KlayRawTransaction>,
		@inject(TYPES_DI.IEthTransactionsApi) transactions: IEthTransactionsApi<
			KlayTransfers, KlayExternalTransactions,
			KlayFullTransaction, KlayTransactionsBetweenAddresses,
			KlayTransactionReceipt
		>,
		@inject(TYPES_DI.IEthBlockApi) block: IEthBlockApi,
		@inject(TYPES_DI.IKlayApiFactoryDto) factory: IKlayApiFactoryDto,
	) {
		super(mainInfo, tokenInfo, addressInfo, contractApi, notifyApi, rawTransactionApi,
			transactions, block, factory);
	}
}
