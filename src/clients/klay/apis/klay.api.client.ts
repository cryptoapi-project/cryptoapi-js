import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { IEthContractApi } from 'interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { KlayAddressBalance } from '../../../dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '../../../dtos/klay/klay.address.info';
import { EstimateGasResponse } from '../../../dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '../../../dtos/klay/klay.network.info';
import { KlayRawTransaction } from '../../../dtos/klay/klay.raw.transaction';
import {
	FullKlayTransaction,
	KlayTransactionByAddresses, KlayTransactionReceipt,
	KlayTransactionsInterAddresses,
	KlayTransactionsIntersection,
} from '../../../dtos/klay/klay.transaction.dtos';
import { IEthAddressApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IEthBlockApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IEthMainInfoApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.main.info.interface';
import { IEthNotifyApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { IEthTokenApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';
import { IKlayApiFactoryDto } from '../../../interfaces/clients/klay/apis/klay.api.factory.dto.interface';
import { BaseEthApiClient } from '../../eth/apis/eth.api.client';

@injectable()
export class KlayApiClient extends BaseEthApiClient<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayRawTransaction,
	KlayTransactionByAddresses, KlayTransactionsIntersection,
	FullKlayTransaction, KlayTransactionsInterAddresses,
	KlayTransactionReceipt
> {
	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) mainInfo: IEthMainInfoApi<KlayNetworkInfo, EstimateGasResponse>,
		@inject(TYPES_DI.IEthTokenApi) tokenInfo: IEthTokenApi,
		@inject(TYPES_DI.IEthAddressApi) addressInfo: IEthAddressApi<KlayAddressBalance, KlayAddressInfo>,
		@inject(TYPES_DI.IEthContractApi) contractApi: IEthContractApi,
		@inject(TYPES_DI.IEthNotifyApi) notifyApi: IEthNotifyApi,
		@inject(TYPES_DI.IEthRawTransactionApi) rawTransactionApi: IEthRawTransactionApi<KlayRawTransaction>,
		@inject(TYPES_DI.IEthTransactionsApi) transactions: IEthTransactionsApi<
			KlayTransactionByAddresses, KlayTransactionsIntersection,
			FullKlayTransaction, KlayTransactionsInterAddresses,
			KlayTransactionReceipt
		>,
		@inject(TYPES_DI.IEthBlockApi) block: IEthBlockApi,
		@inject(TYPES_DI.IKlayApiFactoryDto) factory: IKlayApiFactoryDto,
	) {
		super(mainInfo, tokenInfo, addressInfo, contractApi, notifyApi, rawTransactionApi,
			transactions, block, factory);
	}
}
