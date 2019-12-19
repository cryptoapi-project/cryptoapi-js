# Events crypto-client

Library provides websocket subscribers to work with CryptoAPI.

#### Table of Contents
1. [ETH Event Client](#eth-event-client)
2. [Typedefs](#typedefs)


## ETH Event Client

Eth events client provides the ability to pass a connection url.
Also configuration allows you to set automatically reconnect (by default switched off).
Set in options parameters for reconnect (count of attempts and timeout between them).
If you want automatically resubscribe, you can set following option (by default switched off).

```javascript

const options = {
    eth: {
        events: {
            url: 'ws://localhost:8080',
            reconnect: true,
            attempts: 10,
            timeout: 1000,
            resubscribe: true,
        },
    },
};

const client = new Client('YOUR-API-KEY', options);

```

Client use ping-pong to check connection, you can set own time for it.

Ping - time interval between requests.
Pong - time for getting a response.

```javascript

const options = {
    eth: {
        events: {
            ping: 3000,
            pong: 1000,
        },
    },
};

const client = new Client('YOUR-API-KEY', options);

```

If you want to connect manually, use:

```javascript
const client = new Client('YOUR-API-KEY');

await client.events.eth.connect();
```

If you want to disconnect:

```javascript

await client.events.eth.disconnect();

```

All subscribers are listed below:

<dl>
<dt><a href="#eth.onBlock">eth.onBlock</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#eth.onAddressTransactions">eth.onAddressTransactions</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#eth.onTokenTransfers">eth.onTokenTransfers</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#eth.onTransactionConfirmations">eth.onTransactionConfirmations</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#eth.unsubscribe">eth.unsubscribe</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#eth.connected">eth.connected</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#eth.onConnected">eth.onConnected</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#eth.onDisconnected">eth.onDisconnected</a></dt></dt>
<dd></dd>
</dl>


#### <a name="eth.onBlock">onBlock</a>(confirmations: number, cb: (notification:  <a name="EthBlockNotification">EthBlockNotification</a>) => void) ⇒ <code>Promise&lt;Number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| confirmations | <code>Number</code> | [Minimal count of confirmations to notify] |
| callback | <code>Function</code> | [Notifications handler ] |

Returns subscription id.

```javascript
> const subscriptionId = await client.events.eth.onBlock(1, (msg) => { console.log(msg) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
> client.events.eth.onBlock(1, (msg) => { console.log(msg) });

// Notification example
> {
    transactions:
    [
        {
            block_hash: '0xd017205c2f3ea9ca37d4a6fef7a27e0d769d618530c68d1345588f9fadb30f10',
            block_number: 5296363,
            from: '0x9cca9a56ceabec5bfc23f9f2d2da4e5a6c8c1195',
            gas: 6000000,
            gas_price: '10000000000',
            hash: '0x0921cfdb57299723a80a360a343608486b1aacb9b3f567890a530a025644ff1c',
            input: '0x155fa82c',
            nonce: 12330,
            to: '0x1cddd028e63d0ff555b9de49e9b436c4e14309fc',
            transaction_index: 0,
            value: '0',
            v: '0x1c',
            r: '0x141d97be0f7279b7766e87dfe3351cbe4957ff6d1c9e954ea41d0b6e60c196e',
            s: '0x657eb476b56149a62892e1b2d8091b7dd84cb5adec1ed036ce6b5ba8af17c7b1',
        },
    ],
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
    timestamp: 1571584541
}
```

#### <a name="eth.onAddressTransactions">onAddressTransactions</a>({ address, confirmations }: <a name="EthAddressTransactionSubscription">EthAddressTransactionSubscription</a>, cb: (notification: <a name="EthTransactionNotification">EthTransactionNotification</a>) => void, ⇒ <code>Promise&lt;Number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | [Ethereum address] |
| confirmations | <code>Number</code> | [Minimal count of confirmations to notify] |
| callback | <code>Function</code> | [Notifications handler ] |

Returns subscription id.

```javascript
> const subscriptionId = await client.events.eth.onAddressTransactions({
    address: '0x1cDdD028E63D0Ff555B9DE49E9B436c4e14309Fc',
    confirmations: 1,
}, (msg) => { console.log(msg) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
> client.events.eth.onAddressTransactions({
    address: '0x1cDdD028E63D0Ff555B9DE49E9B436c4e14309Fc',
    confirmations: 1,
}, (msg) => { console.log(msg) });

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

#### <a name="eth.onTokenTransfers">onTokenTransfers</a>({ token, address, confirmations }: <a name="EthTokenTransferSubscription">EthTokenTransferSubscription</a>, cb: (notification: <a name="EthTransferNotification">EthTransferNotification</a>) => void) ⇒ <code>Promise&lt;Number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | [Token contract address] |
| address | <code>String</code> | [Ethereum address] |
| confirmations | <code>Number</code> | [Minimal count of confirmations to notify] |
| callback | <code>Function</code> | [Notifications handler ] |

Returns subscription id.

```javascript
> const subscriptionId = await client.events.eth.onTokenTransfers({
    token: '0x04c9f29d7b2f65a16258cdc389b1dc3f5a731bd0',
    address: '0x6182d3513fa43cbbb010b8c4d40a19e53e5605c3',
    confirmations: 2,
}, (msg) => { console.log(msg) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
> client.events.eth.onTokenTransfers({
    token: '0x04c9f29d7b2f65a16258cdc389b1dc3f5a731bd0',
    address: '0x6182d3513fa43cbbb010b8c4d40a19e53e5605c3',
    confirmations: 2,
}, (msg) => { console.log(msg) });

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

#### <a name="eth.onTransactionConfirmations">onTransactionConfirmations</a>({ hash, confirmations }: <a name="EthTransactionConfirmationSubscription">EthTransactionConfirmationSubscription</a>, cb: (notification: <a name="EthTransactionConfirmationNotification">EthTransactionConfirmationNotification</a>) => void) ⇒ <code>Promise&lt;Number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>String</code> | [Ethereum transaction hash] |
| confirmations | <code>Number</code> | [Minimal count of confirmations to notify] |
| callback | <code>Function</code> | [Notifications handler ] |

Returns subscription id.

```javascript
> const subscriptionId = await client.events.eth.onTransactionConfirmations({
    hash: '0x4c29f5d1bc3228cca62e29d2c9f47a028edf68f85bab133053adfc541001eeb5',
    confirmations: 2,
}, (msg) => { console.log(msg) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
> client.events.eth.onTransactionConfirmations({
    hash: '0x4c29f5d1bc3228cca62e29d2c9f47a028edf68f85bab133053adfc541001eeb5',
    confirmations: 2,
}, (msg) => { console.log(msg) });

// Notification example
> {
    hash: '0x4c29f5d1bc3228cca62e29d2c9f47a028edf68f85bab133053adfc541001eeb5',
    confirmations: 3
}

```

#### <a name="eth.unsubscribe">unsubscribe</a> ⇒ <code>Promise&lt;Boolean&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| param | <code>Number</code> or <code>Function</code> | [Subscription ID] or [Subscription callback] |

```javascript
client.events.eth.unsubscribe(1);
// OR

client.events.eth.unsubscribe((msg) => { console.log(msg) });
```

#### <a name="eth.connected">connected</a> ⇒ <code>Boolean</code>

```javascript
console.log(client.events.eth.connected);

// true

```

#### <a name="eth.onConnected">onConnected</a>

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>Function</code> | [Notifications handler ] |

```javascript
> client.events.eth.onConnected(() => { console.log('connected') });

```

#### <a name="eth.onDisconnected">onDisconnected</a>

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>Function</code> | [Notifications handler ] |

```javascript
> client.events.eth.onDisconnected(() => { console.log('disconnected') });

```

## Typedefs

<dl>
<dt><a href="#EthBlockNotification">EthBlockNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthAddressTransactionSubscription">EthAddressTransactionSubscription</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTransactionNotification">EthTransactionNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTokenTransferSubscription">EthTokenTransferSubscription</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTransferNotification">EthTransferNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTransactionConfirmationSubscription">EthTransactionConfirmationSubscription</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTransactionConfirmationNotification">EthTransactionConfirmationNotification</a> : <code>Object</code></dt>
<dd></dd>
</dl>

#### EthBlockNotification : <code>Object</code>
<a name="EthBlockNotification"></a>

```javascript
{
    size: Number;
    difficulty: String;
    total_difficulty: String;
    uncles: string[];
    number: Number;
    hash: String;
    parent_hash: String;
    nonce: String;
    sha3U_uncles: String;
    logs_bloom: String;
    state_root: String;
    miner: String;
    extra_data: String;
    gas_limit: Number;
    gas_used: Number;
    timestamp: Number;
    transactions: Array<{
        block_hash: String;
        block_number: Number;
        from: String;
        gas: Number;
        gas_price: String;
        hash: String;
        input: String;
        nonce: Number;
        to: String;
        transaction_index: Number;
        value: String;
        v: String;
        r: String;
        s: String;
    }>;
}
```

#### EthAddressTransactionSubscription : <code>Object</code>
<a name="EthAddressTransactionSubscription"></a>

```javascript
{
    address: String;
    confirmations: Number;
}
```
#### EthTransactionNotification : <code>Object</code>
<a name="EthTransactionNotification"></a>

```javascript
{
    utc: String;
    from: String;
    gas: Number;
    gas_price: String;
    hash: String;
    input: String;
    nonce: Number;
    to: String;
    value: String;
    v: String;
    s: String;
    r: String;
    internal_transactions: Array<{
        to: String;
        from: String;
        value: String;
        input: String;
        type: String;
    }>;
}
```
#### EthTokenTransferSubscription : <code>Object</code>
<a name="EthTokenTransferSubscription"></a>

```javascript
{
    token: String;
    address: String;
    confirmations: Number;
}
```
#### EthTransferNotification : <code>Object</code>
<a name="EthTransferNotification"></a>

```javascript
{
    type: String;
    execute_address: String;
    from: String;
    to: String;
    value: String;
    address: String;
    block_number: Number;
    transaction_hash: String;
    transaction_index: Number;
    utc: String;
}
```
#### EthTransactionConfirmationSubscription : <code>Object</code>
<a name="EthTransactionConfirmationSubscription"></a>

```javascript
{
    hash: String;
    confirmations: Number;
}
```
#### EthTransactionConfirmationNotification : <code>Object</code>
<a name="EthTransactionConfirmationNotification"></a>

```javascript
{
    hash: String;
    confirmations: Number;
}
```
