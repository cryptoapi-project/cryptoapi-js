# KLAY API cryptoapi-lib
This library provides klay api methods to work with CryptoAPI.

#### Table of Contents
* [API](#api)
* [Typedefs](#typedefs)

## API

<dl>
<dt><a href="#klay.getNetworkInfo">klay.getNetworkInfo</a> ⇒<code><a href="#KlayNetworkInfo">Promise&lt;KlayNetworkInfo&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.estimateGas">klay.estimateGas</a> ⇒<code><a href="#EstimateGasResponse">Promise&lt;EstimateGasResponse&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getBlock">klay.getBlock</a> ⇒<code><a href="#KlayBlockInfo">Promise&lt;KlayBlockInfo&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getBlocks">klay.getBlocks</a> ⇒<code><a href="#KlayBlocksResponse">Promise&lt;KlayBlocksResponse&gt;</a></code></dt></dt>
<dd></dd>
</dl>

#### <a name="klay.getNetworkInfo">klay.getNetworkInfo()</a> ⇒ <code><a href="#KlayNetworkInfo">Promise&lt;KlayNetworkInfo&gt;</a></code></dt></dt>
Returns JSON data about a network information such as last block, count transactions,
 gas price, difficulty.

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getNetworkInfo();
```

Example response:
```
{
    "last_block": 5282865,
    "count_transactions": "11",
    "gas_price": "1000000000",
    "difficulty": "1"
}
```

#### <a name="klay.estimateGas">klay.estimateGas</a>(transaction: <a href="#TEstimateGasRequest">TEstimateGasRequest</a>) ⇒ <code>Promise&lt;<a href="#TEstimateGasRequest">EstimateGasResponse</a>&gt;</code></dt></dt>
Returns JSON data about an estimate gas information.

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.estimateGas({
        from: '0x653a801625c60112a03097c51b7d3f3a19e07c9c',
    	to: '0xc6c65a3979a7ea0b2ff3040e6d3efdbebf87c345',
    	value: '20000000000000000'
    });
```
Example response:
```
{
    estimate_gas: 21000,
    gas_price: '1000000000',
    nonce: 279
}
```

#### <a name="klay.getBlock">klay.getBlock</a>(blockNumberOrHash: number | string) ⇒ <code>Promise&lt;<a href="#KlayBlockInfo">KlayBlockInfo</a>&gt;</code></dt></dt>
Returns JSON data about block information.

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getBlock('0x0b0c5d50a96e764f8f32453d0e3bc4a7c28639b96b112e6d1b6348bb9829d09a');
```

Example response:
```
{
    size: 824,
    number: 19,
    hash: '0x0b0c5d50a96e764f8f32453d0e3bc4a7c28639b96b112e6d1b6348bb9829d09a',
    parent_hash: '0xfffa0ff34fa6f318bdfdafee30702d18f247f514556905c1491957de2cbbf74f',
    reward: '0x99fb17d324fa0e07f23b49d09028ac0919414db6',
    governance_data: '0x',
    vote_data: '0x',
    timestamp_fos: '0x2d',
    logs_bloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    transaction_root: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    state_root: '0x5777cd2134499bc0a592c93cfbcf21f6017dd309dc11e88137a4e682dfb4180f',
    receipts_root: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    extra_data: '0xd883010000846b6c617988676f312e31322e35856c696e757800000000000000f90164f85494571e53df607be97431a5bbefca1dffe5aef56f4d945cb1a7dccbd0dc446e3640898ede8820368554c89499fb17d324fa0e07f23b49d09028ac0919414db694b74ff9dea397fe9e231df545eb53fe2adf776cb2b84155621f28677da6a6fa3876c56bce72b0c665115e6e502eaae83a05cc8f0aaf271e90b9210b2efebd41e82b755a1598c879f4c88b5dad00912a557d87e7d4531001f8c9b841d3f3910411c79403a52006f09e9ea1f0905bbd0117a7e106228992c9ab8b8d4f3a54415db19ec16cc97befd1c06e1cb39c2600af56fc929594543590a969183d01b841bc65a1de8e9acb7b1d3babb72dc5c648d65332d9be195147b780aed37d963c743e79155bd90379d7f7bdf9c56e16e8e22c61eb8259709bd530b918714f442b9001b841e7a4b76c2fdb7b53f64561c8199078c596f375e80aa4c9a7e9e101ea53e7fb513096632fe35de0ea54fb82a74f671b0704c304590438760fc5c27bbf19518d3a01',
    gas_used: 0,
    utc: '2019-06-26T10:11:55.000Z',
    transactions: [],
    block_score: '0x1',
    total_block_score: '0x14'
}
```

#### <a name="klay.getBlocks">klay.getBlocks</a>(options: <a href="#TPaginationOptions">TPaginationOptions</a>) ⇒ <code>Promise&lt;<a href="#KlayBlocksResponse">KlayBlocksResponse</a>&gt;</code></dt></dt>
Returns JSON data about all blocks.

| Param | Type | Description |
| --- | --- | --- |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Count of skipping items and page items count] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getBlocks({ limit: 1 });
```

Example response:
```
{
    skip: 0,
    limit: 1,
    count: 15044480,
    items: [
        {
            size: 10282,
            number: 15044480,
            hash: '0x3da01fd68fc8ce1508db264d0b26854db0f5f4a69b61a6b1d597edb9eeb5b685',
            parent_hash: '0x0e6b9a32dbaf5f4c4e34a56bc7a364f6a66bc6d7f2056f87cdff3d74e8b6379f',
            reward: '0xa86fd667c6a340c53cc5d796ba84dbe1f29cb2f7',
            governance_data: '0x',
            vote_data: '0x',
            timestamp_fos: '0x2',
            logs_bloom: '0x40095002000008084021008841022808400008000080081020000c020014080000800000204141404001480000000003000008000000280000000492002410040001000820010a1800200808011a85403000000241040000020140001012000402000010008502008000020084080000000020000000400200500090401400202030208308100010408000200000000080400800020a0000401480800118000042080000012000060100080808080c4002000000400540000008008182040004500000420001041000331800088240004006004080040004000000201408400410100040a1040000100042100880080100001108000000004000280608000110',
            transaction_root: '0x331f1d2cf42bd82e7a3b50342d9b771ec9f2b8c5834d82eb4b7d04b263e9e3d4',
            state_root: '0x451948f9ebce09fe9fe5064baa67d67a78e613b5acb7dcd1247a1ce931e510ed',
            receipts_root: '0x68bdc82d43a48dc0b03b414e4054d7d22638b41a60baaa1a698e373d53dc52b5',
            extra_data: '0xd883010200846b6c617988676f312e31322e35856c696e757800000000000000f90164f85494571e53df607be97431a5bbefca1dffe5aef56f4d945cb1a7dccbd0dc446e3640898ede8820368554c89499fb17d324fa0e07f23b49d09028ac0919414db694b74ff9dea397fe9e231df545eb53fe2adf776cb2b841fa010d028f4034591230d92e585334ae2527665a12e6bf25370496a26d2458be0118065d47029e87cc66d26a0a7df75b8ebcfe3face2e6b0159dc78bb7457bf200f8c9b841410ee541d706c949103104d625b464a1f6c7ad0cb014552dbdf070f70a9795cc6fab563646938ebd8a8b718a06f7497f9f50ec94aeb31f16ae97e58f8f460a7501b841d8000c13802157362a6c4d6e49a7156653f11bd9d83c8e6a07fce9173e49c66d2afeabc86cb39d313b590e739ce60d7ccecdcb45555ea598f53c72b6256baa2b01b841e23e5492fa2165ee15a42c95004a9de6d7cdbca17fb4819ef4e67a6c201c218a63ebd5b17624e07d427e894e134e190a4e77dc80aad86b301e6b0d73c9eecc6900',
            gas_used: 6799377,
            utc: '2019-12-17T14:10:51.000Z',
            transactions: [
                '0x331f1d2cf42bd82e7a3b50342d9b771ec9f2b8c5834d82eb4b7d04b263e9e3d4'
            ],
            block_score: '0x1',
            total_block_score: '0xe58f81'
        }
    ]
}
```

## Typedefs

#### KLAY Typedefs

<dl>
<dt><a href="#KlayNetworkInfo">Klay</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TEstimateGasRequest">TEstimateGasRequest</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EstimateGasResponse">EstimateGasResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayBlockInfo">KlayBlockInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayBlocksResponse">KlayBlocksResponse</a> : <code>Object</code></dt>
<dd></dd>
</dl>

#### KlayNetworkInfo : <code>Object</code>
<a name="KlayNetworkInfo"></a>

```javascript
{
    last_block: number;
    count_transactions: string;
    gas_price: number;
    difficulty: number;
}
```

#### TEstimateGasRequest : <code>Object</code>
<a name="TEstimateGasRequest"></a>

```javascript
{
    from?: string;
    to?: string;
    value?: string | number;
    data?: string;
}
```

#### EstimateGasResponse : <code>Object</code>
<a name="EstimateGasResponse"></a>

```javascript
{   
    estimate_gas: number;
    gas_price: string;
    nonce: number;
}
```

#### KlayBlockInfo : <code>Object</code>
<a name="KlayBlockInfo"></a>

```javascript
{
    size: number;
    block_score: string;
    total_block_score: string;
    number: number;
    hash: string;
    parent_hash: string;
    reward: string;
    governance_data: string;
    vote_data: string;
    timestamp_fos: string;
    logs_bloom: string;
    transaction_root: string;
    state_root: string;
    receipts_root: string;
    extra_data: string;
    gas_used: number;
    utc: string;
    transactions: string[]
}
```

#### KlayBlocksResponse : <code>Object</code>
<a name="KlayBlocksResponse"></a>

```javascript
{
    count: number;
    items: KlayBlockInfo[];
    skip: number;
    limit: number;
}
```
