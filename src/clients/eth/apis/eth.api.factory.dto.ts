import { injectable } from 'inversify';

import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import {
	EthExternalTransactions,
	EthTransactionReceipt,
	EthTransactionsBetweenAddresses,
	EthTransferHistory,
	FullEthTransaction,
} from '@src/dtos/eth/eth.transaction';
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

	getContract(data: any): EthContract {
		return new EthContract(data);
	}

	getContractLog(data: any): EthContractLog {
		return new EthContractLog(data);
	}

	getRawTransaction(data: any): EthRawTransaction {
		return new EthRawTransaction(data);
	}

	getTransferHistory(data: any): EthTransferHistory {
		return new EthTransferHistory(data);
	}

	getTransactionsBetweenAddresses(data: any): EthTransactionsBetweenAddresses {
		return new EthTransactionsBetweenAddresses(data);
	}

	getExternalTransactions(data: any): EthExternalTransactions {
		return new EthExternalTransactions(data);
	}

	getFullTransaction(data: any): FullEthTransaction {
		return new FullEthTransaction(data);
	}

	getTransactionReceipt(data: any): EthTransactionReceipt {
		return new EthTransactionReceipt(data);
	}
}
