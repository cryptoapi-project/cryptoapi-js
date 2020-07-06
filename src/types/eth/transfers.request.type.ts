import { PENDING_PARAMETER } from '../../constants/eth.constants';

export type TTransfersRequest = {
	addresses: string[];
	positive?: boolean;
	pending?: PENDING_PARAMETER;
};
