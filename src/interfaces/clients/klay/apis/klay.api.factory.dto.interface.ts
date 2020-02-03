import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { KlayBlockInfo, KlayBlocksResponse } from '@src/dtos/klay/klay.block.dtos';
import { KlayContract, KlayContractLog } from '@src/dtos/klay/klay.contract';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayRawTransaction } from '@src/dtos/klay/klay.raw.transaction';
import { KlayExternalTransactions, KlayFullTransaction, KlayFullTransactionReceipt, KlayTransactionsBetweenAddresses, KlayTransfers } from '@src/dtos/klay/klay.transaction';
import { IBaseEthFactoryDto } from '@src/interfaces/clients/eth/apis/eth.api.factory.dto.interface';

export interface IKlayApiFactoryDto extends IBaseEthFactoryDto<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayBlockInfo, KlayBlocksResponse,
	KlayContract, KlayContractLog,
	KlayRawTransaction,
	KlayTransfers, KlayExternalTransactions,
	KlayFullTransaction, KlayTransactionsBetweenAddresses,
	KlayFullTransactionReceipt
	> { }
