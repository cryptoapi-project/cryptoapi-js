import { KlayMainTokenInfo } from './klay.token.info';

export class KlayTokenSearchRequest {
	query?: string;
	types?: string;
	skip?: number;
	limit?: number;

	constructor(info: {
		query?: string;
		types?: string;
		skip?: number;
		limit?: number;
	}) {
		this.query = info.query;
		this.types = info.types;
		this.skip = info.skip;
		this.limit = info.limit;
	}
}

export class TokenSearchItem {
	address: string;
	info: KlayMainTokenInfo;
	create_transaction_hash: string;
	type: string;
	status: boolean;

	constructor(info: {
		address: string;
		info: KlayMainTokenInfo;
		create_transaction_hash: string;
		type: string;
		status: boolean;
	}) {
		this.address = info.address;
		this.info = new KlayMainTokenInfo(info.info);
		this.create_transaction_hash = info.create_transaction_hash;
		this.type = info.type;
		this.status = info.status;
	}
}

export class KlayTokenSearchResponse {
	query: string | null;
	skip: number;
	limit: number;
	count: number;
	types: string[];
	items: TokenSearchItem[];

	constructor(info: {
		query: string | null;
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
