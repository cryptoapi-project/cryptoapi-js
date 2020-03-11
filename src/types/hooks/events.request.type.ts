export type TWebHookEventsRequest = {
	start_id?: number;
	end_id?: number;
	failed?: boolean;
	skip?: number;
	limit?: number;
};
