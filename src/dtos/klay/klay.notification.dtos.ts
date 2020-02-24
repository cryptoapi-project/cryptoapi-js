export class KlayBlockNotification {

	size: number;
	block_score: string;
	total_block_score: string;
	number: number;
	hash: string;
	parent_hash: string;
	reward: string;
	governance_data: string;
	vote_data: string;
	timestamp_fos: string;
	logs_bloom: string;
	state_root: string;
	extra_data: string;
	gas_used: number;
	utc: string;
	count_transactions: number;

	constructor(notification: {
		size: number;
		block_score: string;
		total_block_score: string;
		number: number;
		hash: string;
		parent_hash: string;
		reward: string;
		governance_data: string;
		vote_data: string;
		timestamp_fos: string;
		logs_bloom: string;
		state_root: string;
		extra_data: string;
		gas_used: number;
		utc: string;
		count_transactions: number;
	}) {
		this.size = notification.size;
		this.block_score = notification.block_score;
		this.total_block_score = notification.total_block_score;
		this.number = notification.number;
		this.hash = notification.hash;
		this.parent_hash = notification.parent_hash;
		this.reward = notification.reward;
		this.governance_data = notification.governance_data;
		this.vote_data = notification.vote_data;
		this.timestamp_fos = notification.timestamp_fos;
		this.logs_bloom = notification.logs_bloom;
		this.state_root = notification.state_root;
		this.extra_data = notification.extra_data;
		this.gas_used = notification.gas_used;
		this.utc = notification.utc;
		this.count_transactions = notification.count_transactions;
	}

}

export class KlayTransactionNotification {

	block_hash: string;
	block_number: number;
	utc: string;
	from: string;
	gas: number;
	gas_price: string;
	hash: string;
	input: string;
	nonce: number;
	to: string;
	value: string;
	transaction_index: number;

	type: string;
	type_int: number;
	code_format?: string;
	fee_payer?: string;
	fee_ratio?: string;
	human_readable?: boolean;
	key?: string;
	sender_tx_hash?: string;

	internal_transactions: Array<{
		to: string;
		from: string;
		value: string;
		input: string;
		type: string;
	}>;

	constructor(notification: {
		block_hash: string;
		block_number: number;
		transaction_index: number;
		type: string;
		type_int: number;
		utc: string;
		from: string;
		gas: number;
		gas_price: string;
		hash: string;
		input: string;
		nonce: number;
		to: string;
		value: string;
		internal_transactions: Array<{
			to: string;
			from: string;
			value: string;
			input: string;
			type: string;
		}>;
	}) {
		this.block_hash = notification.block_hash;
		this.block_number = notification.block_number;
		this.transaction_index = notification.transaction_index;
		this.type = notification.type;
		this.type_int = notification.type_int;
		this.utc = notification.utc;
		this.from = notification.from;
		this.gas = notification.gas;
		this.gas_price = notification.gas_price;
		this.hash = notification.hash;
		this.input = notification.input;
		this.nonce = notification.nonce;
		this.to = notification.to;
		this.value = notification.value;
		this.internal_transactions = notification.internal_transactions.map((tr) => ({
			to: tr.to,
			from: tr.from,
			value: tr.value,
			input: tr.input,
			type: tr.type,
		}));
	}

}
