import { EthContract, EthContractCall } from '../../../dtos/eth/eth.contract.dto';

import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

export interface IEthContractApi extends IConfigurable<IServerConfig> {
	getContractInfo(address: string): Promise<EthContract>;
	callContract(address: string, dataToCall: EthContractCall): Promise<string>;
}
