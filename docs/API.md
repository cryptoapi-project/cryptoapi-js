# API cryptoapi
This library provides api methods to work with CryptoAPI.

#### Table of Contents
1. [API](#api)
2. [Typedefs](#typedefs)

## API

#### ETH API
<dl>
<dt><a href="#eth.getNetworkInfo">eth.getNetworkInfo</a> ⇒<code><a href="#EthNetworkInfo">Promise&lt;EthNetworkInfo&gt;</a></code></dt></dt>
<dd></dd>
</dl>

<dl>
<dt><a href="#eth.estimateGas">eth.estimateGas</a> ⇒<code><a href="#EstimateGasResponse">Promise&lt;EstimateGasResponse&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#eth.getTokenInfoByTokenAddress">eth.getTokenInfoByTokenAddress(address: string)</a> ⇒<code><a href="#EthTokenInfo">Promise&lt;EthTokenInfo&gt;</a></code></dt></dt>
<dd></dd>
</dl>

#### <a name="eth.getNetworkInfo">eth.getNetworkInfo()</a> ⇒ <code><a href="#EthNetworkInfo">Promise&lt;EthNetworkInfo&gt;</a></code></dt></dt>
Returns JSON data about a network information such as last block, count transactions,
current hash rate, gas price, difficulty.
```javascript
    import { Crypto } from 'cryptoapi';
    const crypto = new Crypto('******');
    const result = await crypto.api.eth.getNetworkInfo();
```
Example response:
```
{
    "lastBlock": 5282865,
    "countTransactions": "11",
    "gasPrice": "1000000000",
    "hashRate": 0,
    "difficulty": "1"
}
```
#### <a name="eth.getTokenInfoByTokenAddress">eth.getTokenInfoByTokenAddress(address: string)</a> ⇒ <code><a href="#EthTokenInfo">Promise&lt;EthTokenInfo&gt;</a></code></dt></dt>
Returns JSON data about a eth token information.

Input data:
| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | [Token address] |
```javascript
    import { Crypto } from 'cryptoapi';
    const crypto = new Crypto('******');
    const result = await crypto.api.eth.getTokenInfoByTokenAddress('0x106c2dbabeb8c4932e3f68b76fb9665180b74587');
```
Example response:
```
{
    address: "0x106c2dbabeb8c4932e3f68b76fb9665180b74587"
    create_transaction_hash: "0x3b010efb798c38509b1dbb0b517399cff2716dce4e0dff1ba6b4c09430880ffc"
    decimals: "0"
    holders_count: 1
    name: "premfina-secured-loan-notes-2019-bond-no6-7"
    symbol: "rmn"
    totalSupply: "1000000000000000000"
    type: "ERC20"
}
```

#### <a name="eth.estimateGas">eth.estimateGas</a>(transaction: <a href="#EstimateGasRequest">EstimateGasRequest</a>) ⇒ <code>Promise&lt;<a href="#EstimateGasResponse">EstimateGasResponse</a>&gt;</code></dt></dt>
Returns JSON data about a network information such as last block, count transactions,
current hash rate, gas price, difficulty.
```javascript
    import { Crypto } from 'cryptoapi';
    const crypto = new Crypto('******');
    const result = await crypto.api.eth.estimateGas({
        from: '0x653a801625c60112a03097c51b7d3f3a19e07c9c',
    	to: '0xc6c65a3979a7ea0b2ff3040e6d3efdbebf87c345',
    	value: '20000000000000000'
    });
```
Example:
```
{
    estimate_gas: 21000,
    gas_price: '1000000000',
    nonce: 279
}
```

## Typedefs

<dl>
<dt><a href="#EthNetworkInfo">EthNetworkInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EthTokenInfo">EthTokenInfo</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<dl>
<dt><a href="#EstimateGasRequest">EstimateGasRequest</a> : <code>Object</code></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#EstimateGasResponse">EstimateGasResponse</a> : <code>Object</code></dt>
<dd></dd>
</dl>

#### EthNetworkInfo : <code>Object</code>
<a name="EthNetworkInfo"></a>

```javascript
{
    lastBlock: Number;
    countTransactions: String;
    gasPrice: Number;
    hashRate: Number;
    difficulty: Number;
}
```

#### EthTokenInfo : <code>Object</code>
<a name="EthTokenInfo"></a>

```javascript
{
    address: String;
    type: String;
    name: String;
    symbol: String;
    decimals: String;
    total_supply: String;
    create_transaction_hash: String;
    holders_count: Number;
}
```

#### EstimateGasRequest : <code>Object</code>
<a name="EstimateGasRequest"></a>

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
