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

## Typedefs

<dl>
<dt><a href="#UtxoNetworkInfo">UtxoNetworkInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UtxoBlockInfo">UtxoBlockInfo</a> : <code>Object</code></dt>
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
