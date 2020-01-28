import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { IEthContractApi } from 'interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { EstimateGasResponse } from '../../../dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '../../../dtos/klay/klay.network.info';
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
export class KlayApiClient extends BaseEthApiClient<KlayNetworkInfo, EstimateGasResponse> {
	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) mainInfo: IEthMainInfoApi<KlayNetworkInfo, EstimateGasResponse>,
		@inject(TYPES_DI.IEthTokenApi) tokenInfo: IEthTokenApi,
		@inject(TYPES_DI.IEthAddressApi) addressInfo: IEthAddressApi,
		@inject(TYPES_DI.IEthContractApi) contractApi: IEthContractApi,
		@inject(TYPES_DI.IEthNotifyApi) notifyApi: IEthNotifyApi,
		@inject(TYPES_DI.IEthRawTransactionApi) rawTransactionApi: IEthRawTransactionApi,
		@inject(TYPES_DI.IEthTransactionsApi) transactions: IEthTransactionsApi,
		@inject(TYPES_DI.IEthBlockApi) block: IEthBlockApi,
		@inject(TYPES_DI.IKlayApiFactoryDto) factory: IKlayApiFactoryDto,
	) {
		super(mainInfo, tokenInfo, addressInfo, contractApi, notifyApi, rawTransactionApi,
			transactions, block, factory);
	}
}
