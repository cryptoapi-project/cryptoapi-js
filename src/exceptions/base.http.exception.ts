export class HttpException extends Error {
	readonly message: string;

	constructor(message: string, status: number) {
		super();
		this.message = message;
	}
}
