import { PENDING_PARAMETER } from '../../constants/eth.constants';

export type TTrxsBetweenAddressesRequest = {
	from: string;
	to: string;
	block_number: number;
	pending?: PENDING_PARAMETER;
};
