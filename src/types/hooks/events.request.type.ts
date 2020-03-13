export enum TTrigger {
	BLOCK = 'block',
	TRANSFER = 'transfer',
	TRANSACTION = 'transaction',
}

export type TWebHookEventsRequest = {
	start_id?: number;
	end_id?: number;
	is_failed?: boolean;
	skip?: number;
	limit?: number;
	type?: TTrigger;
};
