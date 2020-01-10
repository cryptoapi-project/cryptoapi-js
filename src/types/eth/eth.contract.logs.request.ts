export type TContractLogsRequest = {
	fromBlock?: number;
	toBlock?: number;
	address?: string[];
	topics?: string[];
};
