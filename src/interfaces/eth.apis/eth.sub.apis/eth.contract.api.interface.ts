import { EthContract } from '../../../dtos/eth/eth.contract.dto';

import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';
import { TEthContractCall } from '../../../types/call.contract.type';

export interface IEthContractApi extends IConfigurable<IServerConfig> {
	getContractInfo(address: string): Promise<EthContract>;
	callContract(data: TEthContractCall): Promise<string>;
}
