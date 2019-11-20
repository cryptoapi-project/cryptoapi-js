const lib = require('./build/src');

console.log('dasdasd');

const crypto = new lib.Crypto('sas', {
	test: 1,
});

(async () => {
	const t = await crypto.api.eth.getNetworkInfo();
	console.log(t);
})();

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
