import { EthContract, EthContractLog } from '../../../../../dtos/eth/eth.contract.dto';

import { TEthContractCall } from '../../../../../types/eth/call.contract.type';
import { TContractLogsRequest } from '../../../../../types/eth/eth.contract.logs.request';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IEthContractApi extends IConfigurable<IServerConfig> {
	getContractInfo(address: string): Promise<EthContract>;
	callContract(dataToCall: TEthContractCall): Promise<string>;
	getContractLogs(data: TContractLogsRequest): Promise<EthContractLog[]>;
}
