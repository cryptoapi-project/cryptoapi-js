import { BaseLibraryException } from './base.exception';

export class InvalidParamsException extends BaseLibraryException {
	constructor(message: string) {
		super(message);
	}
}
