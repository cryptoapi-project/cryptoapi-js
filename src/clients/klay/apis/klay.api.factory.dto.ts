import { injectable } from 'inversify';

import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { KlayContract, KlayContractLog } from '@src/dtos/klay/klay.contract';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayRawTransaction } from '@src/dtos/klay/klay.raw.transaction';
import { FullKlayTransaction, KlayTransactionByAddresses, KlayTransactionReceipt, KlayTransactionsInterAddresses, KlayTransactionsIntersection } from '@src/dtos/klay/klay.transaction';
import { IKlayApiFactoryDto } from '@src/interfaces/clients/klay/apis/klay.api.factory.dto.interface';

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

	getContract(data: any): KlayContract {
		return new KlayContract(data);
	}

	getContractLog(data: any): KlayContractLog {
		return new KlayContractLog(data);
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
