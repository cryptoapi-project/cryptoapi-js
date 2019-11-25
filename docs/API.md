# API cryptoapi
This library provides api methods to work with CryptoAPI.

#### Table of Contents
1. [API](#api)
2. [Typedefs](#typedefs)

## API

#### ETH API
<dl>
<dt><a href="#eth.getNetworkInfo">eth.getNetworkInfo()</a> ⇒<code><a href="#EthNetworkInfo">Promise&lt;EthNetworkInfo&gt;</a></code></dt></dt>
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
Example:
```
{
    "lastBlock": 5282865,
    "countTransactions": "11",
    "gasPrice": "1000000000",
    "hashRate": 0,
    "difficulty": "1"
}
```

## Typedefs

<dl>
<dt><a href="#EthNetworkInfo">EthNetworkInfo</a> : <code>Object</code></dt>
<dd></dd>
</dl>

#### EthNetworkInfo : <code>Object</code>
<a name="EthNetworkInfo"></a>

```javascript
{
    lastBlock: number;
    countTransactions: string;
    gasPrice: number;
    hashRate: number;
    difficulty: number;
}
```
