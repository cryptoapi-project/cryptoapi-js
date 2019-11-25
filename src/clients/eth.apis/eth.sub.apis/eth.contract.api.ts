import { injectable } from 'inversify';

import { IEthContractApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.contract.api.interface';

@injectable()
export class EthContractApi implements IEthContractApi {}
