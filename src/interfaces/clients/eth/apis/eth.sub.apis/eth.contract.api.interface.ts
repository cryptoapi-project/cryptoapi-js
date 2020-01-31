import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract.dto';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TEthContractCall } from '@src/types/eth/call.contract.type';
import { TContractLogsRequest } from '@src/types/eth/eth.contract.logs.request';

export interface IEthContractApi extends IConfigurable<IServerConfig> {
	getContractInfo(address: string): Promise<EthContract>;
	callContract(dataToCall: TEthContractCall): Promise<string>;
	getContractLogs(data: TContractLogsRequest): Promise<EthContractLog[]>;
}
