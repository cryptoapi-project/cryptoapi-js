# ETH events examples

All subscribers are listed below:

<dl>
<dt><a href="#onBlock">eth.onBlock</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onAddressTransactions">eth.onAddressTransactions</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTokenTransfers">eth.onTokenTransfers</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTokenBalance">eth.onTokenBalance</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onContractLog">eth.onContractLog</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTransactionConfirmations">eth.onTransactionConfirmations</a></dt>
<dd></dd>
<dd></dd>
</dl>
<dl>
<dt><a href="#onAddressBalance">eth.onAddressBalance</a></dt>
<dd></dd>
</dl>

#### <a name="onBlock">onBlock</a>(confirmations: number, callback: (notification:  <a name="EthBlockNotification">EthBlockNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');
const subscriptionId = await client.events.eth.onBlock(1, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.eth.onBlock(1, (message) => { console.log(message) });

// Notification example
> {
    count_transaction: 1,
    size: 1660,
    difficulty: '2',
    total_difficulty: '9616152',
    uncles: [],
    number: 5296363,
    hash: '0xd017205c2f3ea9ca37d4a6fef7a27e0d769d618530c68d1345588f9fadb30f10',
    parent_hash: '0xfee5c6495b9ed17b9a301caa0229aff56e76f935feb7186de11961175fa9fecd',
    nonce: '0x0000000000000000',
    sha3_uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
    logs_bloom: '0x0000000000000000000000000400000000000040000000000000000000000000000000000000002000008000900000040800000000040000000200020000800000000000000800600000002a0000000004000000000000004000000000000000000000040220240000000000000008080000200000000000010000100100000000000004000000000010000004000000000000020008000020000000000000002800000000000000000000800020200000000000000000000000002800000001000000020000000000000000000000000000000000002000000000000000a0000000004000000000400040000000000000020000000000000042000000000000',
    state_root: '0x2ef64c54a21a35fcf51fe358b306b93064b130328290a338a29ac319b48cbda4',
    miner: '0x0000000000000000000000000000000000000000',
    extra_data:'0xd683010905846765746886676f312e3133856c696e757800000000000000000061bf6f11d1e3155b81f03506316b502f63a949ebf4de1aab70972ef18d6154cf22280eabdcadd1b699835bcf95cdc2da865d8b3d3fe8378940d9c132e208fa8801',
    gas_limit: 7000000,
    gas_used: 1275258,
    utc: '2019-10-20T18:15:41.000Z',
}
```

#### <a name="onAddressTransactions">onAddressTransactions</a>({ address, confirmations }: <a name="AddressSubscription">AddressSubscription</a>, callback: (notification: <a name="EthTransactionNotification">EthTransactionNotification</a>) => void, ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.eth.onAddressTransactions({
    address: '0x1cDdD028E63D0Ff555B9DE49E9B436c4e14309Fc',
    confirmations: 1,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.eth.onAddressTransactions({
    address: '0x1cDdD028E63D0Ff555B9DE49E9B436c4e14309Fc',
    confirmations: 1,
}, (message) => { console.log(message) });

// Notification example
> {
    utc: '2019-10-20T16:56:56.000Z',
    from: '0x9CCA9A56ceaBec5bFc23f9F2d2DA4E5a6C8C1195',
    gas: 6000000,
    gas_price: "6000000000",
    hash: '0xc180ecec57dcdf4734616e7510fb44e48d32592e2456b99145a9b781d6b2f83e',
    input: '0x155fa82c',
    nonce: 12741,
    to: '0x1cDdD028E63D0Ff555B9DE49E9B436c4e14309Fc',
    value: '0',
    v: '0x1c',
    s: '0xb504a3d4837b2f7a622b975cd508460c1652da16133eb76b9cb83b5b87a61fb',
    r: '0xbfd6ef42e736fda2467fbc6643a58c2d59a139c05a1038c4a00c87e0c54cd890',
    internal_transactions: [
        {
            to: '0x1cddd028e63d0ff555b9de49e9b436c4e14309fc',
            from: '0x9cca9a56ceabec5bfc23f9f2d2da4e5a6c8c1195',
            value: '0',
            input: '0x155fa82c',
            type: 'CALL'
        }
    ]
}
```

#### <a name="onTokenTransfers">onTokenTransfers</a>({ token, address, confirmations }: <a name="EthTokenTransferSubscription">EthTokenTransferSubscription</a>, callback: (notification: <a name="EthTransferNotification">EthTransferNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.eth.onTokenTransfers({
    token: '0x04c9f29d7b2f65a16258cdc389b1dc3f5a731bd0',
    address: '0x6182d3513fa43cbbb010b8c4d40a19e53e5605c3',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.eth.onTokenTransfers({
    token: '0x04c9f29d7b2f65a16258cdc389b1dc3f5a731bd0',
    address: '0x6182d3513fa43cbbb010b8c4d40a19e53e5605c3',
    confirmations: 2,
}, (message) => { console.log(message) });

// Notification example
> {
    type: 'ERC721',
    execute_address: '0x6182d3513fa43cbbb010b8c4d40a19e53e5605c3',
    from: '0x0000000000000000000000000000000000000000',
    to: '0x6182d3513fa43cbbb010b8c4d40a19e53e5605c3',
    value: '0x000000000000000000000000000000000000000000000000000000000000000b',
    address: '0x04c9f29d7b2f65a16258cdc389b1dc3f5a731bd0',
    block_number: 5296853,
    transaction_hash: '0xdee94524c99227eab281a60722d9680f06c6a95e399c59bcc800976642d0a94a',
    transaction_index: 0,
    utc: '2019-10-20T17:18:11.000Z'
}
```

#### <a name="onTokenBalance">onTokenBalance</a>({ token, address, confirmations }: <a name="EthTokenSubscription">EthTokenSubscription</a>, callback: (notification: <a name="EthTokenBalanceNotification">EthTokenBalanceNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.eth.onTokenBalance({
    token: '0xa96d69556441473c14dad36a95ead179cd458e01',
    address: '0x3e182ce283e93a9fd30a9030b1a4dc3f48462db4',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.eth.onTokenBalance({
    token: '0xa96d69556441473c14dad36a95ead179cd458e01',
    address: '0x3e182ce283e93a9fd30a9030b1a4dc3f48462db4',
    confirmations: 2,
}, (message) => { console.log(message) });

// Notification example
> {
    address: "0xa96d69556441473c14dad36a95ead179cd458e01",
    balance: "510000000000000000000",
    holder: "0x3e182ce283e93a9fd30a9030b1a4dc3f48462db4"
}
```

#### <a name="onContractLog">onContractLog</a>({  address, confirmations, from, to, topics  }: EthContractLogSubscription, callback: (notification: EthContractLogNotification) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.eth.onContractLog({
    address: '0xda013d0850e75fe41dc9aa854ec5b6f49ef7dec4',
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.eth.onContractLog({
    address: '0xda013d0850e75fe41dc9aa854ec5b6f49ef7dec4',
}, (message) => { console.log(message) });

// Notification example
> {
    address: '0xda013d0850e75fe41dc9aa854ec5b6f49ef7dec4',
    data: '0x0000000000000000000000000000000000000000000000000de0b6b3a7640000',
    topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x0000000000000000000000002fbeef743f5671904f7b306304dca402ae022fad',
        '0x000000000000000000000000d6b814059955d97e639f275499f06b8735f10558',
    ],
    log_index: 0,
    transaction_hash: '0x47415a673eeb36541a736f6de91eac9433a4513ad860b83b2d49a7a80d15a028',
    transaction_index: 0,
    block_hash: '0xdb3b3d962484a8d3f360103cc25a17eab1b6ef61950659bae56abe6d1e6fe5a9',
    block_number: 5767886,
}
```

#### <a name="onTransactionConfirmations">onTransactionConfirmations</a>({ hash, confirmations }: TransactionConfirmationSubscription, callback: (notification: TransactionConfirmationNotification) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.eth.onTransactionConfirmations({
    hash: '0x4c29f5d1bc3228cca62e29d2c9f47a028edf68f85bab133053adfc541001eeb5',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.eth.onTransactionConfirmations({
    hash: '0x4c29f5d1bc3228cca62e29d2c9f47a028edf68f85bab133053adfc541001eeb5',
    confirmations: 2,
}, (message) => { console.log(message) });

// Notification example
> {
    hash: '0x4c29f5d1bc3228cca62e29d2c9f47a028edf68f85bab133053adfc541001eeb5',
    confirmations: 3
}
```

#### <a name="onAddressBalance">onAddressBalance</a>({ address, confirmations }: AddressSubscription, callback: (notification: BalanceSubscription) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.eth.onAddressBalance({
    address: '0x2fbeef743f5671904f7b306304dca402ae022fad',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.eth.onAddressBalance({
    address: '0x2fbeef743f5671904f7b306304dca402ae022fad',
    confirmations: 2,
}, (message) => { console.log(message) });

// Notification example
> {
    address: "0x2fbeef743f5671904f7b306304dca402ae022fad"
    balance: "17952651870000000000"
}

```
