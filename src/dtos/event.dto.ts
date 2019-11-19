export class Event {
	type: string;
	data: any;

	constructor({ type = '', data = {} }) {
		this.type = type;
		this.data = data;
	}
}
