import { CODE } from '../../constants/http.constants';
import { HttpException } from './base.http.exception';

export class UnauthorizedException extends HttpException {
	constructor(message: string, status = CODE.UNAUTHORIZED) {
		super(message, status);
	}
}
