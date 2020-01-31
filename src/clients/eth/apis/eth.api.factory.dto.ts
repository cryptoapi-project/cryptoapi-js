import { injectable } from 'inversify';

import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import { EthTransactionByAddresses, EthTransactionReceipt, EthTransactionsInterAddresses, EthTransactionsIntersection, FullEthTransaction } from '@src/dtos/eth/eth.transaction';
import { IEthApiFactoryDto } from '@src/interfaces/clients/eth/apis/eth.api.factory.dto.interface';

@injectable()
export class EthApiFactoryDto implements IEthApiFactoryDto {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): EthNetworkInfo {
		return new EthNetworkInfo(data);
	}

	getAddressBalance(data: any): EthAddressBalance {
		return new EthAddressBalance(data);
	}

	getAddressInfo(data: any): EthAddressInfo {
		return new EthAddressInfo(data);
	}

	getRawTransaction(data: any): EthRawTransaction {
		return new EthRawTransaction(data);
	}

	getFullTransaction(data: any): FullEthTransaction {
		return new FullEthTransaction(data);
	}

	getTransactionByAddresses(data: any): EthTransactionByAddresses {
		return new EthTransactionByAddresses(data);
	}

	getTransactionReceipt(data: any): EthTransactionReceipt {
		return new EthTransactionReceipt(data);
	}

	getTransactionsInterAddresses(data: any): EthTransactionsInterAddresses {
		return new EthTransactionsInterAddresses(data);
	}

	getTransactionsIntersection(data: any): EthTransactionsIntersection {
		return new EthTransactionsIntersection(data);
	}

}
