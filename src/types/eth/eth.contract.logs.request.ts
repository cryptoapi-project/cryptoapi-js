export type TContractLogsRequest = {
	from_block?: number;
	to_block?: number;
	address?: string[];
	topics?: string[];
};
