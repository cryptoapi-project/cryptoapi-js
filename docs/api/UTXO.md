# Utxo API cryptoapi-lib

This library provides utxo api methods to work with CryptoAPI.
List supported utxo coins: btc. All supported utxo coins can work with next api methods. 
Below are examples with btc.

#### Table of Contents
* [API](#api)
* [Typedefs](#typedefs)

## API

<dl>
<dt><a href="#btc.getNetworkInfo">btc.getNetworkInfo</a> ⇒<code><a href="#UtxoNetworkInfo">Promise&lt;UtxoNetworkInfo&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.getBlocks">btc.getBlocks</a> ⇒<code><a href="#UtxoBlockInfo">Promise&lt;UtxoBlockInfo[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.getFullTransactionInfo">btc.getFullTransactionInfo(hash: string)</a> ⇒<code>Promise&lt;FullEthTransaction&gt;</code></dt></dt>
<dd></dd>
</dl>

#### <a name="btc.getNetworkInfo">btc.getNetworkInfo()</a> ⇒ <code><a href="#UtxoNetworkInfo">Promise&lt;UtxoNetworkInfo&gt;</a></code></dt></dt>
Returns JSON data about a network information such as last block, count transactions,
current hash rate, difficulty.

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.getNetworkInfo();
```

Example response:
```
{
    count_transactions: "24821800"
    difficulty: "7767482.042232129"
    hashrate: "39070123173302.89"
    last_block: "1381092"
}
```

#### <a name="btc.getBlocks">btc.getBlocks</a>(requestedBlocks: Array<string|number>) ⇒ <code>Promise&lt;<a href="#UtxoBlockInfo">UtxoBlockInfo</a>&gt;</code></dt></dt>
Returns JSON data about block information.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| requestedBlocks | `Array.<string⎮number>` | [List of requested blocks heights or hashes.] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.getBlocks([1]);
```

Example response:
```
[{
   height: 1,
   hash: '00000000b873e79784647a6c82962c70d228557d24a747ea4d1b8bbe878e1206',
   bits: 486604799,
   time: '2011-02-02T23:22:08.000Z',
   merkle_root: 'f0315ffc38709d70ad5647e22048358dd3745f3ce3874223c80a7c92fab0c8ba',
   nonce: 1924588547,
   size: 190,
   version: 1,
   version: 1,
   previous_block_hash: '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943',
   next_block_hash: '000000006c02c8ea6e4ff69651f7fcde348fb9d557a06e6957b65552002a7820',
   reward: 5000000000,
   transaction_count: 1,
   transactions: [ 'f0315ffc38709d70ad5647e22048358dd3745f3ce3874223c80a7c92fab0c8ba' ] 
}]
```

#### <a name="btc.getFullTransactionInfo">btc.getFullTransactionInfo(hash: string)</a> ⇒<code><a href="#FullUtxoTransaction">Promise&lt;FullUtxoTransaction&gt;</a></code></dt></dt>
Returns JSON data about full transaction information.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | [Transaction hash] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.getFullTransactionInfo('fd127bd2992876507ccf668d07e303e11ad8ffbbbb0f5660b0849fd6ba6480db')
```

Example response:
```
{
  block_height: 510,
  block_hash: '0000000006b5346ed54bd9163beb3ef07c4d9f1c9c324fa4057c7fb9f651ca3d',
  block_time: '2011-02-03T15:46:34.000Z',
  mempool_time: null,
  fee: 50000,
  size: 226,
  n_lock_time: 0,
  value: 4806218581,
  hash: 'fd127bd2992876507ccf668d07e303e11ad8ffbbbb0f5660b0849fd6ba6480db',
  input_count: 1,
  output_count: 2,
  inputs: [{ 
    previous_transaction_hash: '780f55cc9de739eac02ff525d533bd200df6a8a572f8b17d7201497519ca1b39',
    output_index: 0,
    sequence_number: 4294967295,
    script: '48304502201fa8715e12869d61a3f11e76006e06fbf17028bf2a190543308e5385c51bc8f00221008e48953e5446dbee687c2e717c94391ae8910696ca1e2f18b9121df07f9f56a10121020a9419f7a9dd8307795923a3a7233bc795c0ee5b4736a225cc12370f83f16414' 
  }],
  outputs: [
    { 
        address: 'mjzM1rh1UizEh6N3jy65k9qeYt3C9PYAx9',
        satoshis: 4805387925,
        script: '76a914310eb34f6bc306db5ef53eca340e0f7e5eefd03a88ac' 
    },
    { 
        address: 'mqHPFTRk23JZm9W1ANuEFtwTYwxjESSgKs',
        satoshis: 830656,
        script: '76a9146b2044146a4438e6e5bfbc65f147afeb64d14fbb88ac' 
    } 
  ]
}
```

## Typedefs

<dl>
<dt><a href="#UtxoNetworkInfo">UtxoNetworkInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UtxoBlockInfo">UtxoBlockInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FullUtxoTransaction">FullUtxoTransaction</a> : <code>Object</code></dt>
<dd></dd>
</dl>

#### UtxoNetworkInfo : <code>Object</code>
<a name="UtxoNetworkInfo"></a>

```javascript
{
    last_block: string;
    count_transactions: string;
    hashrate: string;
    difficulty: string;
}
```

#### UtxoBlockInfo : <code>Object</code>
<a name="UtxoBlockInfo"></a>

```javascript
{
    height: number;
    hash: string;
    bits: number;
    time: Date;
    merkle_root: string;
    nonce: number;
    size: number;
    version: number;
    previous_block_hash: string;
    next_block_hash: string;
    reward: number;
    transaction_count: number;
    transactions: string[];
}
```

#### FullUtxoTransaction : <code>Object</code>
<a name="FullUtxoTransaction"></a>

```javascript
{
    block_height: number;
    block_hash: string;
    block_time: Date;
    mempool_time: Date | null;
    fee: number;
    size: number;
    n_lock_time: number;
    value: string;
    hash: string;
    input_count: number;
    output_count: number;
    inputs: Array<{
        previous_transaction_hash: string;
        output_index: number;
        sequence_number: number;
        script: Buffer | null;
        address: string | null;
    }>;
    outputs: Array<{
        address: string;
        satoshis: number;
        script: Buffer | null;
    }>;
}
```
