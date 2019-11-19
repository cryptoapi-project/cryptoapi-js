import { inject, injectable } from 'inversify';

import { TYPES_DEPENDENCIES } from '../../constants/inversify.constants';

import { IEthApiClient } from '../../interfaces/eth.apis/eth.api.client.interface';
import { IEthAddressApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.address.api.interface';
import { IEthMainInfoApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.main.info.interface';
import { IEthContractApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.contract.api.interface';
import { IEthNotifyApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.raw.transaction.interface';

@injectable()
export class EthApiClient implements IEthApiClient {
	constructor(
		@inject(TYPES_DEPENDENCIES.IEthMainInfoApi)
		private readonly ethMainInfo: IEthMainInfoApi,
		@inject(TYPES_DEPENDENCIES.IEthAddressApi)
		private readonly ethAddress: IEthAddressApi,
		@inject(TYPES_DEPENDENCIES.IEthNotifyApi)
		private readonly ethNotify: IEthNotifyApi,
		@inject(TYPES_DEPENDENCIES.IEthContractApi)
		private readonly ethContract: IEthContractApi,
		@inject(TYPES_DEPENDENCIES.IEthRawTransactionApi)
		private readonly ethRawTransaction: IEthRawTransactionApi,
	) {}

	getNetworkInfo() {
		return this.ethAddress.getNetworkInfo();
	}

	subscribeToken() {
		return this.ethNotify.subscribeToken();
	}

	unsubscribeToken() {
		return this.ethNotify.unsubscribeToken();
	}
}
