import { EthContractInfo } from '../../../dtos/eth/eth.contract.info';
import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

export interface IEthContractApi extends IConfigurable<IServerConfig> {
	getContractInfo(address: string): Promise<EthContractInfo>;
}
