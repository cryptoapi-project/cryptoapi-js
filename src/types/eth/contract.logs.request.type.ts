export type TContractLogsRequest = {
	cursor?: string;
	reversed_fetch?: boolean;
	from_block?: number;
	to_block?: number;
	addresses: string[];
	topics?: string[];
};
