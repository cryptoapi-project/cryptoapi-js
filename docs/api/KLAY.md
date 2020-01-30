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
<dt><a href="#klay.getAddressesBalances">klay.getAddressesBalances(addresses: string[])</a> ⇒<code><a href="#KlayAddressBalance">Promise&lt;KlayAddressBalance[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getAddressesInfos">klay.getAddressesInfos(addresses: string[])</a> ⇒<code><a href="#KlayAddressInfo">Promise&lt;KlayAddressInfo[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.decodeRawTransaction">klay.decodeRawTransaction</a> ⇒<code><a href="#KlayRawTransaction">Promise&lt;KlayRawTransaction&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.sendRawTransaction">klay.sendRawTransaction</a> ⇒<code>Promise&lt;string&gt;</code></dt></dt>
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

#### <a name="klay.getAddressesBalances">getAddressesBalances(address: string[])</a> ⇒ <code><a href="#KlayAddressBalance">Promise&lt;KlayAddressBalance[]&gt;</a></code></dt></dt>
Returns JSON data about a addresses balances information.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| addresses | <code>string[]</code> | [Tokens addresses] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getAddressesBalances([
        '0xa177AD7c3CA2cCa794C02a0FF4dF1C2B09D49C8f',
        '0xf24A2674208B7B5EC2f2863DCb65938EF82dC180'
    ]);
```

Example response:
```
[
    {
        address: "0xa177ad7c3ca2cca794c02a0ff4df1c2b09d49c8f",
        balance: "0"
    }, {
        address: "0xf24a2674208b7b5ec2f2863dcb65938ef82dc180",
        balance: "2044716170999999824"
    }
]
```

#### <a name="klay.getAddressesInfos">klay.getAddressesInfos(address: string[])</a> ⇒ <code><a href="#KlayAddressInfo">Promise&lt;KlayAddressInfo[]&gt;</a></code></dt></dt>
Returns JSON data about addresses information.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| addresses | <code>string[]</code> | [Addresses] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getAddressesInfos([
        '0xa177AD7c3CA2cCa794C02a0FF4dF1C2B09D49C8f',
    ]);
```

Example response:
```javascript
[
    {
        address: "0xa177ad7c3ca2cca794c02a0ff4df1c2b09d49c8f"
        balance: "0"
        count_transactions: 0
        is_contract: true
        type: "ERC20"
    }
]
```

#### <a name="klay.decodeRawTransaction">klay.decodeRawTransaction(tr: string)</a> ⇒ <code><a href="#KlayRawTransaction">Promise&lt;KlayRawTransaction&gt;</a></code></dt></dt>
Returns JSON data of decode raw transaction by hash.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| tr | <code>string</code> | [Raw transaction] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.decodeRawTransaction('0x2af902ca0a8505d21dba00843b9ac9ff80809490b3e9a3770481345a7f17f22f16d020bccfd33eb901fe608060405234801561001057600080fd5b506101de806100206000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a39d8ef81146100805780636353586b146100a757806370a08231146100ca578063fd6b7ef8146100f8575b3360009081526001602052604081208054349081019091558154019055005b34801561008c57600080fd5b5061009561010d565b60408051918252519081900360200190f35b6100c873ffffffffffffffffffffffffffffffffffffffff60043516610113565b005b3480156100d657600080fd5b5061009573ffffffffffffffffffffffffffffffffffffffff60043516610147565b34801561010457600080fd5b506100c8610159565b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604081208054349081019091558154019055565b60016020526000908152604090205481565b336000908152600160205260408120805490829055908111156101af57604051339082156108fc029083906000818181858888f193505050501561019c576101af565b3360009081526001602052604090208190555b505600a165627a7a72305820627ca46bb09478a015762806cc00c431230501118c7c26c30ac58c4e09e51c4f0029802180f845f84325a0d8cdc1219df8bbca8a00255420a5bec0f602e6266b76ce7dcf5b0b26bd7fe3b9a05557496a3a17f784c3eb40acbb526dfbc20ae6b00c633a0186d804cd9137b13e9433f524631e573329a550296f595c820d6c65213ff845f84325a041a4c4bf0e3039d04472beae4135a14c26ae4c88bad08d5f0acf61f7c0eb60dfa03d1658f38e5c2089d64985fb33cb13db2e41cde6958ba2cfcfaba685a7f565e2');
```

Example response:

```javascript
{
  type: "FEE_DELEGATED_SMART_CONTRACT_DEPLOY_WITH_RATIO",
  nonce: 10,
  gas_price: "25000000000",
  gas: "999999999",
  from: "0x90b3e9a3770481345a7f17f22f16d020bccfd33e",
  human_readable: false,
  fee_ratio: "0x21",
  code_format: "0x",
  fee_payer: "0x33f524631e573329a550296f595c820d6c65213f",
  payer_v: "0x25",
  payer_r: "0x41a4c4bf0e3039d04472beae4135a14c26ae4c88bad08d5f0acf61f7c0eb60df",
  payer_s: "0x3d1658f38e5c2089d64985fb33cb13db2e41cde6958ba2cfcfaba685a7f565e2",
  fee_payer_signatures": [
    [
      "0x25",
      "0x41a4c4bf0e3039d04472beae4135a14c26ae4c88bad08d5f0acf61f7c0eb60df",
      "0x3d1658f38e5c2089d64985fb33cb13db2e41cde6958ba2cfcfaba685a7f565e2"
    ]
  ],
  to: "0x",
  value: "0",
  data: "0x608060405234801561001057600080fd5b506101de806100206000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a39d8ef81146100805780636353586b146100a757806370a08231146100ca578063fd6b7ef8146100f8575b3360009081526001602052604081208054349081019091558154019055005b34801561008c57600080fd5b5061009561010d565b60408051918252519081900360200190f35b6100c873ffffffffffffffffffffffffffffffffffffffff60043516610113565b005b3480156100d657600080fd5b5061009573ffffffffffffffffffffffffffffffffffffffff60043516610147565b34801561010457600080fd5b506100c8610159565b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604081208054349081019091558154019055565b60016020526000908152604090205481565b336000908152600160205260408120805490829055908111156101af57604051339082156108fc029083906000818181858888f193505050501561019c576101af565b3360009081526001602052604090208190555b505600a165627a7a72305820627ca46bb09478a015762806cc00c431230501118c7c26c30ac58c4e09e51c4f0029",
  v: "0x25",
  r: "0xd8cdc1219df8bbca8a00255420a5bec0f602e6266b76ce7dcf5b0b26bd7fe3b9",
  s: "0x5557496a3a17f784c3eb40acbb526dfbc20ae6b00c633a0186d804cd9137b13e",
  signatures: [
    [
      "0x25",
      "0xd8cdc1219df8bbca8a00255420a5bec0f602e6266b76ce7dcf5b0b26bd7fe3b9",
      "0x5557496a3a17f784c3eb40acbb526dfbc20ae6b00c633a0186d804cd9137b13e"
    ]
  ]
}
 ```

#### <a name="klay.sendRawTransaction">klay.sendRawTransaction(tr: string)</a> ⇒<code>Promise&lt;string&gt;</code></dt></dt>

Returns transaction hash.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| tr | <code>string</code> | [Raw transaction] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.sendRawTransaction('0xf867078505d21dba00830186a094cae7cd8e94233f0bb8a2f08ef36d65f987cb4fc401808207f6a00f571767e3d59596656160261f78e0591fd0aced4362ba80faeb4ec8b629a167a05c69bf85c2a20149a38c4299ae59dde72c1ee01bae5203f9c29f869ffffe4b0f');
```

Example response:

```
'0x5fde62cf325ba9461da9f2dcba2d9993002cc93025fd20408cf0c3c0119e3909'
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
<dt><a href="#KlayAddressBalance">KlayAddressBalance</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayAddressInfo">KlayAddressInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayRawTransaction">KlayRawTransaction</a> : <code>Object</code></dt>
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

#### KlayAddressBalance : <code>Object</code>
<a name="KlayAddressBalance"></a>

```javascript
{
    address: string;
    balance: string;
}
```

#### KlayAddressInfo : <code>Object</code>
<a name="KlayAddressInfo"></a>

```javascript
{
    address: string;
    balance: string;
    is_contract: boolean;
    type: string;
    count_transactions: number;
}
```

#### EthRawTransaction : <code>Object</code>
<a name="KlayRawTransaction"></a>

```javascript
{
	type: string;
	gas_price: string;
	gas: string;
	from: string;
	human_readable: boolean;
	fee_ratio: string;
	code_format: string;
	fee_payer: string;
	payer_v: string;
	payer_r: string;
	payer_s: string;
	fee_payer_signatures: Array<string[]|string>;
	to: string;
	value: string;
	data: string;
	v: number;
	r: string;
	s: string;
	signatures: Array<string[]|string>;
	nonce: string;
}
```
