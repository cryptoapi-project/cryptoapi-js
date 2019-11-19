import { Crypto } from './build/src';

const t = new Crypto('sas', {
	asd: 'asAS'
});



t.api.eth.getNetworkInfo();
// Crypto()
// const crypto = new Crypto({
// 	token: 'asd'
// });

console.log(crypto);

//
// const result = await crypto.api.eth.getNetworkInfo();
//
// crypto.events.eth.subscribeBlock(123, 1);
//
// crypto.api.eth.getNetworkInfo();
// crypto.api.eth.subscribeToken();
//
// crypto.events.eth.subscribeBlock(12, 10);
// crypto.events.eth.unsubscribeBlock(12, 9);
//
// crypto.events.eth.onMessageBlock((data) => console.log('data clinet', data));
//
// crypto.events.eth.close();
