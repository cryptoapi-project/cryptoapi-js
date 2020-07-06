import { PENDING_PARAMETER } from '../../constants/eth.constants';

export type TExternalTransactionsRequest = {
	addresses: string[];
	pending?: PENDING_PARAMETER;
};
