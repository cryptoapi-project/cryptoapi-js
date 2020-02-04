
export type TTokenTransfersRequest = {
	tokenAddress: string;
	addresses?: string[];
};

export type TTokenTransfersByAddressesRequest = {
	addresses: string[];
	tokenAddress: string;
};
