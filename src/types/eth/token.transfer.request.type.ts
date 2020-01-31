
export class TTokenTransfersRequest {
	tokenAddress: string;
	addresses?: string[];

	constructor(info: {
		tokenAddress: string;
		addresses?: string[];
	}) {
		this.tokenAddress = info.tokenAddress;
		this.addresses = info.addresses;
	}
}

export class TTokenTransfersByAddressesRequest {
	addresses: string[];
	tokenAddress: string;

	constructor(info: {
		addresses: string[];
		tokenAddress: string;
	}) {
		this.addresses = info.addresses;
		this.tokenAddress = info.tokenAddress;
	}
}
