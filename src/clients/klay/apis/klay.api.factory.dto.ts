import { injectable } from 'inversify';

import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { KlayBlockInfo, KlayBlocksResponse } from '@src/dtos/klay/klay.block.dtos';
import { KlayContract, KlayContractLog } from '@src/dtos/klay/klay.contract';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayRawTransaction } from '@src/dtos/klay/klay.raw.transaction';
import {
	KlayExternalTransactions,
	KlayFullTransaction,
	KlayFullTransactionReceipt,
	KlayTransactionsBetweenAddresses,
	KlayTransfers,
} from '@src/dtos/klay/klay.transaction';
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

	getBlock(data: any): KlayBlockInfo {
		return new KlayBlockInfo(data);
	}

	getBlocksResponse(data: any): KlayBlocksResponse {
		return new KlayBlocksResponse(data);
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

	getTransfers(data: any): KlayTransfers {
		return new KlayTransfers(data);
	}

	getTransactionsBetweenAddresses(data: any): KlayTransactionsBetweenAddresses {
		return new KlayTransactionsBetweenAddresses(data);
	}

	getExternalTransactions(data: any): KlayExternalTransactions {
		return new KlayExternalTransactions(data);
	}

	getFullTransaction(data: any): KlayFullTransaction {
		return new KlayFullTransaction(data);
	}

	getTransactionReceipt(data: any): KlayFullTransactionReceipt {
		return new KlayFullTransactionReceipt(data);
	}
}
