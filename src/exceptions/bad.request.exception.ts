import { CODE } from '../constants/http.constants';
import { HttpException } from './base.http.exception';

export class BadRequestException extends HttpException {
	constructor(message: string, status = CODE.BAD_REQUEST) {
		super(message, status);
	}
}
