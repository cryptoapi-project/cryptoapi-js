import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { KlayBlockInfo, KlayBlocksResponse } from '@src/dtos/klay/klay.block.dtos';
import { KlayContract, KlayContractLog } from '@src/dtos/klay/klay.contract';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayRawTransaction } from '@src/dtos/klay/klay.raw.transaction';
import { KlayTokenInfo } from '@src/dtos/klay/klay.token.info';
import { KlayTokenSearchResponse } from '@src/dtos/klay/klay.token.search';
import { KlayTokenBalanceByHoldersOut } from '@src/dtos/klay/klay.tokens.by.holders';
import { KlayExternalTransactions, KlayFullTransaction, KlayFullTransactionReceipt, KlayTransactionsBetweenAddresses, KlayTransfers } from '@src/dtos/klay/klay.transaction';
import { KlayTokenTransfersResponse } from '@src/dtos/klay/klay.transfer.dto';
import { IBaseEthApiClient } from '@src/interfaces/clients/eth/apis/eth.api.client.interface';

export interface IKlayApiClient extends IBaseEthApiClient<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayTokenInfo, KlayTokenBalanceByHoldersOut, KlayTokenSearchResponse, KlayTokenTransfersResponse,
	KlayBlockInfo, KlayBlocksResponse,
	KlayContract, KlayContractLog,
	KlayRawTransaction,
	KlayTransfers, KlayExternalTransactions,
	KlayFullTransaction, KlayTransactionsBetweenAddresses,
	KlayFullTransactionReceipt
	> { }
