import { KlayAddressBalance } from '../../../../dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '../../../../dtos/klay/klay.address.info';
import { EstimateGasResponse } from '../../../../dtos/klay/klay.estimate.gas';
import { KlayRawTransaction } from '../../../../dtos/klay/klay.raw.transaction';

import { KlayNetworkInfo } from '../../../../dtos/klay/klay.network.info';
import {
	FullKlayTransaction,
	KlayTransactionByAddresses, KlayTransactionReceipt,
	KlayTransactionsInterAddresses,
	KlayTransactionsIntersection,
} from '../../../../dtos/klay/klay.transaction.dtos';
import { IBaseEthApiClient } from '../../eth/apis/eth.api.client.interface';

export interface IKlayApiClient extends IBaseEthApiClient<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayRawTransaction,
	KlayTransactionByAddresses, KlayTransactionsIntersection,
	FullKlayTransaction, KlayTransactionsInterAddresses,
	KlayTransactionReceipt
> {}
