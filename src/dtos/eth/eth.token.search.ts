import { PaginationOptions } from '../paginations.options';

export class EthTokenSearchRequest extends PaginationOptions {
	query?: string;
	types?: string;

	constructor(info: {
		query?: string;
		types?: string;
		skip?: number;
		limit?: number;
	}) {
		super(info);
		this.query = info.query;
		this.types = info.types;
	}
}

export class TokenSearchItem {
	address: string;
	info: any;
	create_transaction_hash: string;
	type: string;
	status: boolean;

	constructor(info: {
		address: string;
		info: any;
		create_transaction_hash: string;
		type: string;
		status: boolean;
	}) {
		this.address = info.address;
		this.info = info.info;
		this.create_transaction_hash = info.create_transaction_hash;
		this.type = info.type;
		this.status = info.status;
	}
}

export class EthTokenSearchResponse {
	query: string|null;
	skip: number;
	limit: number;
	count: number;
	types: string[];
	items: TokenSearchItem[];

	constructor(info: {
		query: string|null;
		skip: number;
		limit: number;
		count: number;
		types: string[];
		items: TokenSearchItem[];
	}) {
		this.query = info.query;
		this.skip = info.skip;
		this.limit = info.limit;
		this.count = info.count;
		this.types = info.types;
		this.items = info.items.map((item) => new TokenSearchItem(item));
	}
}
