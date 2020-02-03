export type TContractLogsRequest = {
	from_block?: number;
	to_block?: number;
	addresses: string[];
	topics?: string[];
};
