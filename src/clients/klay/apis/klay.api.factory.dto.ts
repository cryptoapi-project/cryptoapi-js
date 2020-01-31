import { injectable } from 'inversify';

import { KlayAddressBalance } from '../../../dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '../../../dtos/klay/klay.address.info';

import { FullKlayTransaction, KlayTransactionByAddresses, KlayTransactionReceipt, KlayTransactionsInterAddresses, KlayTransactionsIntersection } from 'dtos/klay/klay.transaction.dtos';
import { IKlayApiFactoryDto } from 'interfaces/clients/klay/apis/klay.api.factory.dto.interface';
import { EstimateGasResponse } from '../../../dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '../../../dtos/klay/klay.network.info';
import { KlayRawTransaction } from '../../../dtos/klay/klay.raw.transaction';

@injectable()
export class KlayApiFactoryDto implements IKlayApiFactoryDto {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): KlayNetworkInfo {
		return new KlayNetworkInfo(data);
	}

	getAddressBalance(data: any): KlayAddressBalance {
		return new KlayAddressBalance(data);
	}

	getAddressInfo(data: any): KlayAddressInfo {
		return new KlayAddressInfo(data);
	}

	getRawTransaction(data: any): KlayRawTransaction {
		return new KlayRawTransaction(data);
	}

	getFullTransaction(data: any): FullKlayTransaction {
		return new FullKlayTransaction(data);
	}

	getTransactionByAddresses(data: any): KlayTransactionByAddresses {
		return new KlayTransactionByAddresses(data);
	}

	getTransactionReceipt(data: any): KlayTransactionReceipt {
		return new KlayTransactionReceipt(data);
	}

	getTransactionsInterAddresses(data: any): KlayTransactionsInterAddresses {
		return new KlayTransactionsInterAddresses(data);
	}

	getTransactionsIntersection(data: any): KlayTransactionsIntersection {
		return new KlayTransactionsIntersection(data);
	}

}
