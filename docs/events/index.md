# CryptoAPI events

Library provides eth websocket subscribers to work with CryptoAPI.

#### Table of Contents

* [Configure events clients](#configure-events-clients)
* [List events clients](#list-events-clients)
    * [ETH client](#eth-client)
	* [BTC client](#btc-client)
* [Typedefs](#typedefs)

## Configure Events Clients

Library supports eth, btc events client.
Crypto events client provides the ability to pass a connection url.
Also configuration allows you to set automatically reconnect.
Set in options parameters for reconnect (count of attempts and timeout between them).
If you want automatically resubscribe, you can set following option.
 Below are examples configure with eth client.

```javascript
import { Client } from 'cryptoapi-lib';

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
import { Client } from 'cryptoapi-lib';

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
import { Client } from 'cryptoapi-lib';

const client = new Client('YOUR-API-KEY');

await client.events.eth.connect();
```

If you want to disconnect:

```javascript

await client.events.eth.disconnect()
```
## List Events Clients

### ETH client
<dl>
<dt><a href="#onBlock">eth.onBlock</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onAddressTransactions">eth.onAddressTransactions</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTokenTransfers">eth.onTokenTransfers</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onContractLog">eth.onContractLog</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTransactionConfirmations">eth.onTransactionConfirmations</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#unsubscribe">eth.unsubscribe</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#connected">eth.connected</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onConnected">eth.onConnected</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onDisconnected">eth.onDisconnected</a></dt></dt>
<dd></dd>
</dl>

### BTC client
<dl>
<dt><a href="#onBlock">btc.onBlock</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onAddressTransactions">btc.onAddressTransactions</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTransactionConfirmations">btc.onTransactionConfirmations</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#unsubscribe">btc.unsubscribe</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#connected">btc.connected</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onConnected">btc.onConnected</a></dt></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onDisconnected">btc.onDisconnected</a></dt></dt>
<dd></dd>
</dl>

#### <a name="onBlock">onBlock</a>(confirmations: number, callback: (notification:  BlockNotification => void) ⇒ <code>Promise&lt;number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| confirmations | <code>number</code> | [Minimal count of confirmations to notify - max value 100] |
| callback | <code>(notification: BlockNotification => void </code>| [Notifications handler. BlockNotification is generic type.] |

Returns subscription id.

Define generic type:

|  | BlockNotification |
| --- | --- |
| eth | <a href="#EthBlockNotification">EthBlockNotification<a> |
| btc | <a href="#UtxoBlockNotification">UtxoBlockNotification<a> |

Examples:

|  | Examples |
| --- | --- |
| eth | [eth.onBlock](examples/eth.md#onblockconfirmations-number-callback-notification-ethblocknotification-void-promisenumber) |
| btc | [btc.onBlock](examples/utxo.md#onblockconfirmations-number-callback-notification-utxoblocknotification-void-promisenumber) |

#### <a name="onAddressTransactions">onAddressTransactions</a>({ address, confirmations }: <a href='#AddressTransactionSubscription'>AddressTransactionSubscription</a>, callback: (notification: TransactionNotification) => void, ⇒ <code>Promise&lt;number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | [Address ] |
| confirmations | <code>number</code> | [Minimal count of confirmations to notify - max value 100] |
| callback | <code>Function</code> | [Notifications handler ] |
| callback | <code>(notification: TransactionNotification => void </code>| [Notifications handler. TransactionNotification is generic type.] |

Returns subscription id.

Define generic type:

|  | TransactionNotification |
| --- | --- |
| eth | <a href="#EthTransactionNotification">EthTransactionNotification<a> |
| btc | <a href="#UtxoTransactionNotification">UtxoTransactionNotification<a> |

Examples:

|  | Examples |
| --- | --- |
| eth | [eth.onAddressTransactions](./examples/eth.md#onaddresstransactions-address-confirmations-addresstransactionsubscription-callback-notification-ethtransactionnotification-void-promisenumber) |
| btc | [btc.onAddressTransactions](./examples/utxo.md#onaddresstransactions-address-confirmations-addresstransactionsubscription-callback-notification-utxotransactionnotification-void-promisenumber) |

#### <a name="onTokenTransfers">onTokenTransfers</a>({ token, address, confirmations }: <a href="#EthTokenTransferSubscription">EthTokenTransferSubscription</a>, callback: (notification: <a href="#EthTransferNotification">EthTransferNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | [Token contract address] |
| address | <code>string</code> | [Address] |
| confirmations | <code>number</code> | [Minimal count of confirmations to notify - max value 100] |
| callback | <code>Function</code> | [Notifications handler ] |

Returns subscription id.

Examples:

|  | Examples |
| --- | --- |
| eth | [eth.onTokenTransfers](./examples/eth.md#ontokentransfers-token-address-confirmations-ethtokentransfersubscription-callback-notification-ethtransfernotification-void-promisenumber) |

#### <a name="onContractLog">onContractLog</a>({  address, confirmations, from, to, topics  }: <a href="#EthContractLogSubscription">EthContractLogSubscription</a>, callback: (notification: <a href="#EthContractLogNotification">EthContractLogNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | [Address] |
| confirmations | <code>number</code> | [Minimal count of confirmations to notify - max value 100] |
| from | <code>number</code> | [Block number] |
| to | <code>number</code> | [Block number] |
| topics | <code>string[]</code> | [Hex strings, filter logs by them] |
| callback | <code>Function</code> | [Notifications handler ] |

Returns subscription id.

Examples:

|  | Examples |
| --- | --- |
| eth | [eth.onContractLog](./examples/eth.md#oncontractlog-address-confirmations-from-to-topics-ethcontractlogsubscription-callback-notification-ethcontractlognotification-void-promisenumber) |

#### <a name="onTransactionConfirmations">onTransactionConfirmations</a>({ hash, confirmations }: <a href="#TransactionConfirmationSubscription">TransactionConfirmationSubscription</a>, callback: (notification: <a href="#TransactionConfirmationSubscription">TransactionConfirmationNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | [Transaction hash] |
| confirmations | <code>number</code> | [Minimal count of confirmations to notify - max value 100] |
| callback | <code>(notification: TransactionConfirmationNotification => void </code>| [Notifications handler.] |

Returns subscription id.

Examples:


|  | Examples |
| --- | --- |
| eth | [eth.onTransactionConfirmations](./examples/eth.md#ontransactionconfirmations-hash-confirmations-transactionconfirmationsubscription-callback-notification-transactionconfirmationnotification-void-promisenumber) |
| btc | [btc.onTransactionConfirmations](./examples/utxo.md#ontransactionconfirmations-hash-confirmations-transactionconfirmationsubscription-callback-notification-transactionconfirmationsubscription-void-promisenumber) |

#### <a name="unsubscribe">unsubscribe</a> ⇒ <code>Promise&lt;boolean&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| param | <code>number</code> or <code>Function</code> | [Subscription ID] or [Subscription callback] |

Example:

```javascript
client.events.eth.unsubscribe(1);
// OR

client.events.eth.unsubscribe((message) => { console.log(message) });
```
#### <a name="connected">connected</a> ⇒ <code>boolean</code>
```javascript
console.log(client.events.eth.connected);

// true

```

#### <a name="onConnected">onConnected</a>

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>Function</code> | [Notifications handler ] |

```javascript
> client.events.eth.onConnected(() => { console.log('connected') });

```

#### <a name="onDisconnected">onDisconnected</a>

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>Function</code> | [Notifications handler ] |

```javascript
> client.events.eth.onDisconnected(() => { console.log('disconnected') });

```

## Typedefs

<dl>
<dt><a href="#AddressTransactionSubscription">AddressTransactionSubscription</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TransactionConfirmationNotification">TransactionConfirmationNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TransactionConfirmationSubscription">TransactionConfirmationSubscription</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthBlockNotification">EthBlockNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UtxoBlockNotification">UtxoBlockNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTransactionNotification">EthTransactionNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UtxoTransactionNotification">UtxoTransactionNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTokenTransferSubscription">EthTokenTransferSubscription</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTransferNotification">EthTransferNotification</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthContractLogSubscription">EthContractLogSubscription</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthContractLogNotification">EthContractLogNotification</a> : <code>Object</code></dt>
<dd></dd>
</dl>

#### EthBlockNotification : <code>Object</code>
<a name="EthBlockNotification"></a>

```javascript
{
    size: number;
    difficulty: string;
    total_difficulty: string;
    uncles: string[];
    number: number;
    hash: string;
    parent_hash: string;
    nonce: string;
    sha3U_uncles: string;
    logs_bloom: string;
    state_root: string;
    miner: string;
    extra_data: string;
    gas_limit: number;
    gas_used: number;
    utc: string;
    transactions: Array<{
        block_hash: string;
        block_number: number;
        from: string;
        gas: number;
        gas_price: string;
        hash: string;
        input: string;
        nonce: number;
        to: string;
        transaction_index: number;
        value: string;
        v: string;
        r: string;
        s: string;
    }>;
}
```

#### AddressTransactionSubscription : <code>Object</code>
<a name="AddressTransactionSubscription"></a>

```javascript
{
    address: string;
    confirmations: number;
}
```
#### EthTransactionNotification : <code>Object</code>
<a name="EthTransactionNotification"></a>

```javascript
{
    utc: string;
    from: string;
    gas: number;
    gas_price: string;
    hash: string;
    input: string;
    nonce: number;
    to: string;
    value: string;
    v: string;
    s: string;
    r: string;
    internal_transactions: Array<{
        to: string;
        from: string;
        value: string;
        input: string;
        type: string;
    }>;
}
```
#### EthTokenTransferSubscription : <code>Object</code>
<a name="EthTokenTransferSubscription"></a>

```javascript
{
    token: string;
    address: string;
    confirmations: number;
}
```
#### EthTransferNotification : <code>Object</code>
<a name="EthTransferNotification"></a>

```javascript
{
    type: string;
    execute_address: string;
    from: string;
    to: string;
    value: string;
    address: string;
    block_number: number;
    transaction_hash: string;
    transaction_index: number;
    utc: string;
}
```

#### EthContractLogSubscription : <code>Object</code>
<a name="EthContractLogSubscription"></a>

```javascript
{
    address: string;
	confirmations?: number;
	from?: number;
	to?: number;
	topics?: string[];
}
```

#### EthContractLogNotification : <code>Object</code>
<a name="EthContractLogNotification"></a>

```javascript
{
    address: string;
	data: string;
	topics: string[];
	log_index: number;
	transaction_hash: string;
	transaction_index: number;
	block_hash: string;
	block_number: number;
}
```

#### TransactionConfirmationSubscription : <code>Object</code>
<a name="TransactionConfirmationSubscription"></a>

```javascript
{
    hash: string;
    confirmations: number;
}
```
#### TransactionConfirmationNotification : <code>Object</code>
<a name="TransactionConfirmationNotification"></a>

```javascript
{
    hash: string;
    confirmations: number;
}
```
#### UtxoBlockNotification : <code>Object</code>
<a name="UtxoBlockNotification"></a>

```javascript
{
    hash: string;
    bits: number;
    difficulty: number;
    time: string;
    time_normalized: string;
    merkle_root: string;
    nonce: number;
    height: number;
    size: number;
    version: number;
    previous_block_hash: string;
    next_block_hash: string;
    reward: number;
    status: string;
    transaction_count: number;
    transactions: Transaction[];
}
```

#### UtxoTransactionNotification : <code>Object</code>
<a name="UtxoTransactionNotification"></a>

```javascript
{
    hash: string;
    block_hash: string;
    block_height: number;
    block_time: string;
    block_time_normalized: string;
    mempool_time: string;
    fee: number;
    n_lock_time: number;
    size: number;
    value: number;
    input_count: number;
    output_count: number;
    inputs: Array<{
        previous_transaction_hash: string;
        output_index: number;
        sequence_number: number;
        script: string;
    }>;
    outputs: Array<{
        address: string;
        satoshis: number;
        script: string;
    }>;
}
```
