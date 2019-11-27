export class PaginationOptions {
	skip?: number;
	limit?: number;

	constructor(options: {
		skip?: number;
		limit?: number;
	}) {
		this.skip = options.skip;
		this.limit = options.limit;
	}
}
