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
<dt><a href="#btc.getBlock">btc.getBlock</a> ⇒<code><a href="#UtxoBlockInfo">Promise&lt;UtxoBlockInfo&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.getBlocks">btc.getBlocks</a> ⇒<code><a href="#UtxoBlockInfo">Promise&lt;UtxoBlockInfo[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.getFullTransactionInfo">btc.getFullTransactionInfo</a> ⇒<code><a href="#FullUtxoTransaction">Promise&lt;FullUtxoTransaction&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.getTransactionsByHashes">btc.getTransactionsByHashes</a> ⇒<code><a href="#FullUtxoTransaction">Promise&lt;FullUtxoTransaction[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.getTransactionsByBlockHeightOrHash">btc.getTransactionsByBlockHeightOrHash</a> ⇒<code><a href="#FullUtxoTransaction">Promise&lt;FullUtxoTransaction&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.getAddressesInfos">btc.getAddressesInfos</a> ⇒<code><a href="#UtxoAddressInfo">Promise&lt;UtxoAddressInfo[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.getAddressesHistory">btc.getAddressesHistory</a> ⇒<code><a href="#UtxoAddressHistory">Promise&lt;UtxoAddressHistory&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#btc.sendRawTransaction">btc.sendRawTransaction</a> ⇒<code>Promise&lt;string&gt;</code></dt></dt>
<dd></dd>
<dt><a href="#btc.decodeRawTransaction">btc.decodeRawTransaction</a> ⇒<code><a href="#UtxoRawTransaction">Promise&lt;UtxoRawTransaction&gt;</a></code></dt></dt>
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

#### <a name="btc.getBlock">btc.getBlock</a>(heightOrHash: string|number) ⇒ <code>Promise&lt;<a href="#UtxoBlockInfo">UtxoBlockInfo</a>&gt;</code></dt></dt>

Returns JSON data information about requested block.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| heightOrHash |  `string⎮number`| [Height or hash of requested block.] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.getBlock(1);
```

Example response:
```javascript
{
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

#### <a name="btc.getTransactionsByHashes">btc.getTransactionsByHashes</a>(hashes: string[]) ⇒ <code>Promise&lt;<a href="#FullUtxoTransaction">FullUtxoTransaction[]</a>&gt;</code></dt></dt>
Returns JSON data about full transaction information by hashes.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| hashes | <code>string[]</code> | [Accepts transactions hashes.] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.getTransactionsByHashes(['20222eb90f5895556926c112bb5aa0df4ab5abc3107e21a6950aec3b2e3541e2', 'f0315ffc38709d70ad5647e22048358dd3745f3ce3874223c80a7c92fab0c8ba']);
```

Example response:

```
[
	{
		block_height: 2,
		block_hash: "000000006c02c8ea6e4ff69651f7fcde348fb9d557a06e6957b65552002a7820",
		block_time: "2011-02-02T23:22:26.000Z",
		fee: 0,
		size: 109,
		n_lock_time: 0,
		value: 5000000000,
		hash: "20222eb90f5895556926c112bb5aa0df4ab5abc3107e21a6950aec3b2e3541e2",
		input_count: 1,
		output_count: 1,
		inputs: [
			{
				previous_transaction_hash: "0000000000000000000000000000000000000000000000000000000000000000",
				output_index: 4294967295,
				sequence_number: 4294967295,
				script: null
			}
		],
		outputs: [
			{
				address: "msf4WtN1YQKXvNtvdFYt9JBnUD2FB41kjr",
				satoshis: 5000000000,
				script: "21038a7f6ef1c8ca0c588aa53fa860128077c9e6c11e6830f4d7ee4e763a56b7718fac"
			}
		]
	},
	{
		block_height: 1,
		block_hash: "00000000b873e79784647a6c82962c70d228557d24a747ea4d1b8bbe878e1206",
		block_time: "2011-02-02T23:22:08.000Z",
		fee: 0,
		size: 109,
		n_lock_time: 0,
		value: 5000000000,
		hash: "f0315ffc38709d70ad5647e22048358dd3745f3ce3874223c80a7c92fab0c8ba",
		input_count: 1,
		output_count: 1,
		inputs: [
			{
				previous_transaction_hash: "0000000000000000000000000000000000000000000000000000000000000000",
				output_index: 4294967295,
				sequence_number: 4294967295,
				script: null
			}
		],
		outputs: [
			{
				address: "n3GNqMveyvaPvUbH469vDRadqpJMPc84JA",
				satoshis: 5000000000,
				script: "21021aeaf2f8638a129a3156fbe7e5ef635226b0bafd495ff03afe2c843d7e3a4b51ac"
			}
		]
	}
```

#### <a name="btc.getTransactionsByBlockHeightOrHash">btc.getTransactionsByBlockHeightOrHash</a>(blockHeightOrHash: string|number) ⇒ <code>Promise&lt;<a href="#FullUtxoTransaction[]">FullUtxoTransaction[]</a>&gt;</code></dt></dt>

Returns JSON data about full transaction information by block height or hash.

Input data:

| Param | Type | Description |
| --- | --- |  --- |
| blockHeightOrHash |  `string⎮number` | Requested block height or hash. |

```javascript

    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.getTransactionsByBlockHeightOrHash(1);
```

Example response:
```javascript
[
    {
        block_hash: "00000000b873e79784647a6c82962c70d228557d24a747ea4d1b8bbe878e1206"
        block_height: 1
        block_time: "2011-02-02T23:22:08.000Z"
        fee: 0
        hash: "f0315ffc38709d70ad5647e22048358dd3745f3ce3874223c80a7c92fab0c8ba"
        input_count: 1
        mempool_time: null
        n_lock_time: 0
        output_count: 1
        size: 109
        value: 5000000000
        inputs: [
            {
                output_index: 4294967295
                previous_transaction_hash: "0000000000000000000000000000000000000000000000000000000000000000"
                script: null
                sequence_number: 4294967295            
            }
        ]  
        outputs: [
            {
                address: "n3GNqMveyvaPvUbH469vDRadqpJMPc84JA"
                satoshis: 5000000000
                script: "21021aeaf2f8638a129a3156fbe7e5ef635226b0bafd495ff03afe2c843d7e3a4b51ac"
            }
        ] 
    }
]
```

#### <a name="btc.getAddressesInfos">btc.getAddressesInfos</a>(addresses: string[]) ⇒ <code>Promise&lt;<a href="#UtxoAddressInfo[]">UtxoAddressInfo[]</a>&gt;</code></dt></dt>

Return JSON data about btc addresses, such as balance. Field balance include spent, unspent, 
confirmed, unconfirmed balance.

Input data:

| Param | Type | Description |
| --- | --- |  --- |
| addresses |  <code>string[]</code>  | Requested addresses. |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.getAddressesInfos(['mj7x3dQvsSkEoBuuU3GBKMTqDXBArFC1zu','mnz4DK2sv9RkkPd96b1ZAgKQ4nRpCoA1kb']);
```

Example response:

```javascript
[
  {
    address: "mj7x3dQvsSkEoBuuU3GBKMTqDXBArFC1zu",
    balance: {
      spent: "0",
      unspent: "5000000000",
      confirmed: "0",
      unconfirmed: "5000000000"
    }
  },
  {
    address: "mnz4DK2sv9RkkPd96b1ZAgKQ4nRpCoA1kb",
    balance: {
      spent: "0",
      unspent: "5000000000",
      confirmed: "5000000000",
      unconfirmed: "0"
    }
  }
]
```

#### <a name="btc.getAddressesHistory">btc.getAddressesHistory</a>(addresses: string[], options: TPaginationOptions) ⇒ <code>Promise&lt;<a href="#UtxoAddressHistory">UtxoAddressHistory</a>&gt;</code></dt></dt>

Return JSON data about btc addresses history.

Input data:

| Param | Type | Description |
| --- | --- |  --- |
| addresses |  <code>string[]</code>  | [Requested addresses.] |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Options params to paginating response] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.getAddressesHistory(['mstvLRTSSEaMGHEUmhUe5CCWYUJ8Z78Y8w', { skip: 1, limit:1 });
```

```
{
  count: 1,
  items: [
    {   
        block_hash: "00000000000000b1cf4d4d75ba0bc6907757cc5a171841ffaca9ce2b179444f2",
        block_height: 1381092,
        block_time: "2018-08-06T06:01:25.000Z",
        fee: 0,
        hash: "1d2a7a543489ec17500b2b92cbcdf8393bf72bd07770d808373a82f19c1a24ff",
        input_count: 1,
        block_hash: "00000000000000b1cf4d4d75ba0bc6907757cc5a171841ffaca9ce2b179444f2",
        block_height: 1381092,
        block_time: "2018-08-06T06:01:25.000Z",
        fee: 0,
        hash: "1d2a7a543489ec17500b2b92cbcdf8393bf72bd07770d808373a82f19c1a24ff",
        input_count: 1,
        size: 283,
        value: 2522100,
        inputs: [
            {
                address: "n2PccFZybL2hpyR4g9K6aK35ChUuNvzMWE",
                output_index: 1,
                previous_transaction_hash: "9f70e49415fe406f739aa3752b0c3548e8f2824a6cecbde2ba99a09ea62f8dae",
                script: "473044022079d12c837bea46711fcf4bff914e07e29d79aeed6f1a2093aee16d34ab8ad793022039f671e9391b6b245619cc4caf3c15dcc673239fe89a2e6c44f7079ff45bfb030121035d316cce2874025f670073b01cf1e093ed705fa9e8a9d602243da6e219f9baea",
                sequence_number: 4294967295,
            },
        ],
        outputs: [
            {
                address: "mstvLRTSSEaMGHEUmhUe5CCWYUJ8Z78Y8w",
                satoshis: 2522100,
                script: "76a91487c9066f56572bf09770e592418d948a846cf67f88ac", 
            }, 
            {
                address: null,
                satoshis: 0,
                script: "6a4c500000940200011be6fccdbbcf2f8f83da85ae288e10cd19c7677f3395f5b7bd8b292b0c543bdc872cdf568a693dd14456536369115b",
            }
        ]
    }
  ]
}
```

#### <a name="btc.sendRawTransaction">btc.sendRawTransaction(tr: string)</a> ⇒<code>Promise&lt;string&gt;</code></dt></dt>

Returns transaction hash.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| tr | <code>string</code> | [hexstring] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.sendRawTransaction('01000000014368d74c6a7b118610b325389613acff68a324eb86caf61e1494d1ff6bcb07e9010000006a4730440220463a47bd9ba114ba919' +
        'b7bb6fc4f9e97754fb1e8eb78c5d4803cb3208fea7c8c0220271174def0bf6499b09b48fa87ad6f3ae8e3f1' +
        '6217228ed5c722aa9a4e1180fd01210309a18fa38989b25a7cc4f66fb193a9a26842113874908c430a25d65f6' +
        '6e4e5fbffffffff0101000000000000001976a91492bf5261a59bd600825dc81cfee868b7f123b97288ac00000000');
```

Example response:

```
'01000000014368d74c6a7b118610b325389613acff68a324eb'
```

#### <a name="btc.decodeRawTransaction">btc.decodeRawTransaction(tr: string)</a> ⇒ <code><a href="#UtxoRawTransaction">Promise&lt;UtxoRawTransaction&gt;</a></code></dt></dt>
Returns JSON data of decode raw transaction by hash.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| tr | <code>string</code> | [Raw transaction] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.btc.decodeRawTransaction('01000000014368d74c6a7b118610b325389613acff68a324eb86caf61e1494d1ff6bcb07e9010000006a4730440220463a47bd9ba114ba919b7bb6fc4f9e97754fb1e8eb78c5d4803cb3208fea7c8c0220271174def0bf6499b09b48fa87ad6f3ae8e3f16217228ed5c722aa9a4e1180fd01210309a18fa38989b25a7cc4f66fb193a9a26842113874908c430a25d65f66e4e5fbffffffff0101000000000000001976a91492bf5261a59bd600825dc81cfee868b7f123b97288ac00000000');
```

Example response:
```
{
  hash: "4c308f5db4e539600b3aee40ed6c82d6cbe91d41d49e4050195a9830a6bdc2cd",
  version: 1,
  n_lock_time: 0,
  inputs: [
    {
      previous_transaction_hash: "e907cb6bffd194141ef6ca86eb24a368ffac13963825b31086117b6a4cd76843",
      output_index: 1,
      sequence_number: 4294967295,
      script: "4730440220463a47bd9ba114ba919b7bb6fc4f9e97754fb1e8eb78c5d4803cb3208fea7c8c0220271174def0bf6499b09b48fa87ad6f3ae8e3f16217228ed5c722aa9a4e1180fd01210309a18fa38989b25a7cc4f66fb193a9a26842113874908c430a25d65f66e4e5fb"
    }
  ],
  outputs: [
    {
      satoshis: 1,
      script: "76a91492bf5261a59bd600825dc81cfee868b7f123b97288ac",
      script_pub_key: "OP_DUP OP_HASH160 20 0x92bf5261a59bd600825dc81cfee868b7f123b972 OP_EQUALVERIFY OP_CHECKSIG"
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
<dt><a href="#UtxoAddressInfo">UtxoAddressInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UtxoAddressHistory">UtxoAddressHistory</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TPaginationOptions">TPaginationOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UtxoRawTransaction">UtxoRawTransaction</a> : <code>Object</code></dt>
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

#### UtxoAddressInfo : <code>Object</code>
<a name="UtxoAddressInfo"></a>

```javascript
{
    address: string;
    balance: {
        spent: string;
        unspent: string;
        confirmed: string;
        unconfirmed: string;
    };
}
```

#### UtxoAddressHistory : <code>Object</code>
<a name="UtxoAddressHistory"></a>

```javascript
{
    count: number;
    items: FullUtxoTransaction[];
}
```

#### TPaginationOptions : <code>Object</code>
<a name="TPaginationOptions"></a>

```javascript
{
    skip?: number;
    limit?: number;
}
```

#### UtxoRawTransaction : <code>Object</code>
<a name="UtxoRawTransaction"></a>

```javascript
{
    hash: string;
    version: number;
    n_lock_time: number;
    inputs: Array<{
        previous_transaction_hash: string;
        output_index: number;
        sequence_number: number;
        script: string;
    }>;
    outputs: Array<{
        satoshis: number;
        script: string;
        script_pub_key: string;
    }>;
}
```
