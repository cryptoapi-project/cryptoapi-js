export interface IConfigurable<T> {
	configure(config: T, props?: any): void;
}

export interface IConfigurableFactory<T> {
	setFactory(factory: T): void;
}
