# BTC events examples

All subscribers are listed below:

<dl>
<dt><a href="#onBlock">btc.onBlock</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onAddressTransactions">btc.onAddressTransactions</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTransactionConfirmations">btc.onTransactionConfirmations</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onAddressBalance">btc.onAddressBalance</a></dt>
<dd></dd>
</dl>

#### <a name="onBlock">onBlock</a>(confirmations: number, callback: (notification: UtxoBlockNotification) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');
const subscriptionId = await client.events.btc.onBlock(1, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.btc.onBlock(1, (message) => { console.log(message) });

// Notification example
> {
   bits: 453246972,
   difficulty: 16384,
   hash: "000000000003a566221cba18f0126fe1acb495df4459e5f274fc42f124417dc4",
   height: 374453,
   merkle_root: "e37663e3b52316a1d1f4dc9ef6d887f0b61a7ef9382381472d93782ab47c03f1",
   next_block_hash: null,
   nonce: 1275191257,
   previous_block_hash: "00000000000005654b83414befb3b9101216073a62f33dd8d2266a6649b0b5f9",
   reward: 2500021000,
   size: 1097,
   status: "processing",
   time: "2015-04-28T13:16:01.000Z",
   time_normalized: "2015-04-28T13:35:54.023Z",
   transaction_count: 1,
   transactions: [
        {
            block_hash: "000000000003a566221cba18f0126fe1acb495df4459e5f274fc42f124417dc4",
            block_height: 374453,
            block_time: "2015-04-28T13:16:01.000Z",
            block_time_normalized: "2015-04-28T13:35:54.023Z",
            fee: 0,
            hash: "0a146f8c7583282c70aa1d80970f2190fd8c1126214ec86d7c81f05e5a0acc4d",
            input_count: 1,
            mempool_time: null,
            n_lock_time: 0,
            output_count: 3,
            size: 195,
            value: 2500021000,
            addresses: [
                "myqzZmRvoXmrhsrM5STiMGtNRxCFArHWRd",
                "msTiK9Wk3xL6g54GEBiXvWkxR3baSUhFrk",
                "mwhdUvp73wiR6gKWWzz7PhUSGc4caUCEw6",
            ],
            inputs: [
                {
                    address: null,
                    output_index: 4294967295,
                    previous_transaction_hash: "0000000000000000000000000000000000000000000000000000000000000000",
                    script: null,
                    sequence_number: 4294967295,
                }
            ],         
            legacy_addresses: [],
            outputs: [
                {
                    address: "myqzZmRvoXmrhsrM5STiMGtNRxCFArHWRd",
                    satoshis: 2487520896,
                    script: "dqkUyQwQI5PCi+n0kFgt2HuxtQztgmqIrA==",
                }   
            ]    
        }
    ]
}
```

#### <a name="onAddressTransactions">onAddressTransactions</a>({ address, confirmations }: <a name="AddressSubscription">AddressSubscription</a>, callback: (notification: UtxoTransactionNotification) => void, ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.btc.onAddressTransactions({
    address: '0x1cDdD028E63D0Ff555B9DE49E9B436c4e14309Fc',
    confirmations: 1,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.btc.onAddressTransactions({
    address: '0x1cDdD028E63D0Ff555B9DE49E9B436c4e14309Fc',
    confirmations: 1,
}, (message) => { console.log(message) });

// Notification example
> {
      block_hash: "000000000003a566221cba18f0126fe1acb495df4459e5f274fc42f124417dc4",
      block_height: 374453,
      block_time: "2015-04-28T13:16:01.000Z",
      block_time_normalized: "2015-04-28T13:35:54.023Z",
      fee: 0,
      hash: "0a146f8c7583282c70aa1d80970f2190fd8c1126214ec86d7c81f05e5a0acc4d",
      input_count: 1,
      mempool_time: null,
      n_lock_time: 0,
      output_count: 3,
      size: 195,
      value: 2500021000,
      addresses: [
          "myqzZmRvoXmrhsrM5STiMGtNRxCFArHWRd",
          "msTiK9Wk3xL6g54GEBiXvWkxR3baSUhFrk",
          "mwhdUvp73wiR6gKWWzz7PhUSGc4caUCEw6",
      ],
      inputs: [
          {
              address: null,
              output_index: 4294967295,
              previous_transaction_hash: "0000000000000000000000000000000000000000000000000000000000000000",
              script: null,
              sequence_number: 4294967295,
          }
      ],         
      legacy_addresses: [],
      outputs: [
          {
              address: "myqzZmRvoXmrhsrM5STiMGtNRxCFArHWRd",
              satoshis: 2487520896,
              script: "dqkUyQwQI5PCi+n0kFgt2HuxtQztgmqIrA==",
          }   
      ]    
    }
```

#### <a name="onTransactionConfirmations">onTransactionConfirmations</a>({ hash, confirmations }: TransactionConfirmationSubscription, callback: (notification: TransactionConfirmationSubscription) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.btc.onTransactionConfirmations({
    hash: '0x4c29f5d1bc3228cca62e29d2c9f47a028edf68f85bab133053adfc541001eeb5',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.btc.onTransactionConfirmations({
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

const subscriptionId = await client.events.btc.onAddressBalance({
    address: '12dRugNcdxK39288NjcDV4GX7rMsKCGn6B',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.btc.onAddressBalance({
    address: '12dRugNcdxK39288NjcDV4GX7rMsKCGn6B',
    confirmations: 2,
}, (message) => { console.log(message) });

// Notification example
> {
    address: "12dRugNcdxK39288NjcDV4GX7rMsKCGn6B"
    balance: "1280223665"
}

```
