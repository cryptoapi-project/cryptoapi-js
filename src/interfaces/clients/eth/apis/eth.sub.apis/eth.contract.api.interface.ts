import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TContractCall } from '@src/types/eth/call.contract.type';
import { TContractLogsRequest } from '@src/types/eth/eth.contract.logs.request';

export interface IEthContractApi<TContract, TContractLog> extends IConfigurable<IServerConfig> {
	getContractInfo(address: string): Promise<TContract>;
	callContract(dataToCall: TContractCall): Promise<string>;
	getContractLogs(data: TContractLogsRequest): Promise<TContractLog[]>;
}
