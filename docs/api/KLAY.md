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
<dt><a href="#klay.getTokenInfoByTokenAddress">klay.getTokenInfoByTokenAddress(address: string)</a> ⇒<code><a href="#KlayTokenInfo">Promise&lt;KlayTokenInfo&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getTokenBalanceByAddresses">klay.getTokenBalanceByAddresses</a> ⇒<code><a href="#KlayTokenBalanceByHoldersOut">Promise&lt;KlayTokenBalanceByHoldersOut&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getTokenBalancesByHolders">klay.getTokenBalancesByHolders</a> ⇒<code><a href="#KlayTokenBalanceByHoldersOut">Promise&lt;KlayTokenBalanceByHoldersOut&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getTokenTransfers">klay.getTokenTransfers</a> ⇒<code><a href="#KlayTokenTransfersResponse">Promise&lt;KlayTokenTransfersResponse&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getTokenTransfersByAddresses">klay.getTokenTransfersByAddresses</a> ⇒<code><a href="#KlayTokenTransfersResponse">Promise&lt;KlayTokenTransfersResponse&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.searchToken">klay.searchToken</a> ⇒<code><a href="#KlayTokenSearchResponse">Promise&lt;KlayTokenSearchResponse&gt;</a></code></dt></dt>
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


#### <a name="klay.getTokenInfoByTokenAddress">klay.getTokenInfoByTokenAddress(address: string)</a> ⇒ <code><a href="#KlayTokenInfo">Promise&lt;KlayTokenInfo&gt;</a></code></dt></dt>
Returns JSON data about a klay token information.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | [Token address] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getTokenInfoByTokenAddress('0x106c2dbabeb8c4932e3f68b76fb9665180b74587');
```

Example response:
```
{
    address: "0x106c2dbabeb8c4932e3f68b76fb9665180b74587"
    create_transaction_hash: "0x3b010efb798c38509b1dbb0b517399cff2716dce4e0dff1ba6b4c09430880ffc"
    info: {
        decimals: "0"
        name: "premfina-secured-loan-notes-2019-bond-no6-7"
        symbol: "rmn"
        total_supply: "1000000000000000000"
    }
    holders_count: 1
    type: "ERC20"
}
```

#### <a name="klay.getTokenBalanceByAddresses">klay.getTokenBalanceByAddresses(tokenAddress: string, holderAddresses: string[])</a> ⇒ <code><a href="#KlayBalanceTokensByHolder">Promise&lt;KlayBalanceTokensByHolder&gt;</a></code></dt></dt>
Returns JSON data about balance token by token and holder addresses.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| tokenAddress | <code>string</code> | [Token address] |
| holderAddresses | <code>string[]</code> | [Holder addresses] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getTokenBalanceByAddresses('0x5ae86537ea087929a34b597480fd23144d2dd216', ['0xd89f43605f4ccc0935afceba98f3d5d04ce2e390']);
```

Example response:
```
{
    "total": 1,
    "items": [
        {
            address: "0x5ae86537ea087929a34b597480fd23144d2dd216"
            balance: "100000000000000000000"
            holder: "0xd89f43605f4ccc0935afceba98f3d5d04ce2e390"
        }
    ]
}
```

#### <a name="klay.getTokenBalancesByHolders">klay.getTokenBalancesByHolders(holders: string[], options: <a href="#TPaginationOptions">TPaginationOptions</a>)</a> ⇒<code><a href="#KlayBalanceTokensByHolder">Promise&lt;KlayBalanceTokensByHolder[]&gt;</a></code></dt></dt>
Return list of tokens balances by holders addresses.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| holders | <code>string[]</code> | [Holder address] |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Count of skipping items and page items count] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getTokenBalancesByHolders(['0xd89f43605f4ccc0935afceba98f3d5d04ce2e390'], { limit: 10 });
```

Example response:
```
[
    total: 10,
    items: [
        {
            holder: "0xd89f43605f4ccc0935afceba98f3d5d04ce2e390",
            address: "0x5ae86537ea087929a34b597480fd23144d2dd216",
            balance: "100000000000000000000",
        }
    ]
]
```

#### <a name="klay.getTokenTransfers">klay.getTokenTransfers(transfersRequest: TTokenTransfersRequest, options?: TPaginationOptions)</a> ⇒ <code><a href="#KlayTokenTransfersResponse">Promise&lt;KlayTokenTransfersResponse&gt;</a></code></dt></dt>
Returns JSON data with list transfer by token address.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| transfersRequest | <code><a href="#TTokenTransfersRequest">TTokenTransfersRequest</a></code> | [Token address and ethereum addresses] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getTokenTransfers({tokenAddress: '0xDa2A36bDe6b0b87C72701d94Fa4C2BC2d70D9b2c'}, {
        skip: 1,
        limit: 1
    });
```

Example response:
```
{
    addresses: null
    skip: 1
    limit: 1
    items: [
        {
            address: "0xda2a36bde6b0b87c72701d94fa4c2bc2d70d9b2c"
            block_number: 5514501
            execute_address: "0x1fe2407c888d6d7d41021d45e9f22781f6641629"
            from: "0x0000000000000000000000000000000000000000"
            log_index: 2
            utc: "2019-11-27T12:11:26.000Z"
            to: "0x08355184bdfd2f61324808cc8652b12db6d4f8cc"
            transaction_hash: "0x45dff9751cffa8a933138d17ccfaff480114dc3240da78e2fde76c9e81462636"
            transaction_index: 9
            type: "ERC20"
            value: "0x000000000000000000000000000000000000000000000001158e460913d00000"
        }
    ]
    count: 2
}
```

#### <a name="klay.getTokenTransfersByAddresses">klay.getTokenTransfersByAddresses(transfersRequest: TTokenTransfersByAddressesRequest, options?: TPaginationOptions)</a> ⇒ <code><a href="#KlayTokenTransfersResponse">Promise&lt;KlayTokenTransfersResponse&gt;</a></code></dt></dt>
Returns JSON data with list transfer by token address and ethereum addresses.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| transfersRequest | <code><a href="#TTokenTransfersByAddressesRequest">TTokenTransfersByAddressesRequest</a></code> | [Token address and ethereum addresses] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getTokenTransfersByAddresses({
        tokenAddress: '0xDa2A36bDe6b0b87C72701d94Fa4C2BC2d70D9b2c',
        addresses: ['0x08355184bdfd2f61324808cc8652b12db6d4f8cc']
    }, {
        skip: 1,
        limit: 1
    });
```

Example response:
```
{
    addresses: ['0x08355184bdfd2f61324808cc8652b12db6d4f8cc']
    skip: 1
    limit: 1
    items: [
        {
            address: "0xda2a36bde6b0b87c72701d94fa4c2bc2d70d9b2c"
            block_number: 5514501
            execute_address: "0x1fe2407c888d6d7d41021d45e9f22781f6641629"
            from: "0x0000000000000000000000000000000000000000"
            log_index: 2
            utc: "2019-11-27T12:11:26.000Z"
            to: "0x08355184bdfd2f61324808cc8652b12db6d4f8cc"
            transaction_hash: "0x45dff9751cffa8a933138d17ccfaff480114dc3240da78e2fde76c9e81462636"
            transaction_index: 9
            type: "ERC20"
            value: "0x000000000000000000000000000000000000000000000001158e460913d00000"
        }
    ]
    count: 1
}
```


#### <a name="klay.searchToken">klay.searchToken(searchRequest: TTokenSearchRequest, options: TPaginationOptions)</a> ⇒<code><a href="#TTokenSearchRequest">Promise&lt;KlayTokenSearchResponse&gt;</a></code></dt></dt>
Returns JSON info tokens returned by query object.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| searchRequest | <code><a href="#TTokenSearchRequest">TTokenSearchRequest</a></code> | [Optional object request, that includes general information to search by type (ERC20, ERC721) or query and pagination.] |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Count of skipping items and page items count] |
```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.searchToken({ query: 'ERC721' }, { limit: 1 })
```

Example response:
```
{
    count: 3
    items: [
        {
            address: "0x863c78f81b731d3ca11be9a74fe6a92dc1d0cfc9"
            create_transaction_hash: "0xe5c991986020f9ecce379da1a658920e5430254b4fadc26806c9ed53cdb9f0c7"
            info: {
                decimals: "0",
                total_supply: "0",
                symbol: "MNT721",
                name: "ERC721Mint"
            }
            status: true
            type: "ERC721"
        }
    ]
    limit: 1
    query: "ERC721"
    skip: 0
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
<dt><a href="#KlayAddressBalance">KlayAddressBalance</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayAddressInfo">KlayAddressInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTokenInfo">KlayTokenInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTokenBalance">KlayTokenBalance</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayBalanceTokensByHolder">KlayBalanceTokensByHolder</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TTokenTransfersRequest">TTokenTransfersRequest</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TTokenTransfersByAddressesRequest">TTokenTransfersByAddressesRequest</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTokenTransfersResponse">KlayTokenTransfersResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TTokenSearchRequest">TTokenSearchRequest</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTokenSearchResponse">KlayTokenSearchResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayMainTokenInfo">KlayMainTokenInfo</a> : <code>Object</code></dt>
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

#### KlayTokenInfo : <code>Object</code>
<a name="KlayTokenInfo"></a>

```javascript
{
    address: string;
    type: string;
    info: KlayMainTokenInfo;          
    create_transaction_hash: string;
    holders_count: number;
}

```

#### KlayTokenBalance : <code>Object</code>
<a name="KlayTokenBalance"></a>

```javascript
{
   address: string;
   balance: string;
   holder: string;
}
```

#### KlayBalanceTokensByHolder : <code>Object</code>
<a name="KlayBalanceTokensByHolder"></a>

```javascript
{
   total: number;
   items: KlayTokenBalance[];
}
```

#### TTokenTransfersRequest : <code>Object</code>
<a name="TTokenTransfersRequest"></a>

```javascript
{
    tokenAddress: string;
    addresses?: string[] || null;
}
```

#### TTokenTransfersByAddressesRequest : <code>Object</code>
<a name="TTokenTransfersByAddressesRequest"></a>

```javascript
{
    addresses: string[];
    tokenAddress: string;
}
```











#### KlayTokenTransfersResponse : <code>Object</code>
<a name="KlayTokenTransfersResponse"></a>

```javascript
{
    addresses: string[] | null;
    skip: number;
    limit: number;
    count: number;
    items: Array<{
        type: string;
        execute_address: string;
        from: string;
        to: string;
        value: string;
        address: string;
        block_number: number;
        transaction_hash: string;
        transaction_index: number;
        log_index: number;
        utc: string;  
    }>
}
```

#### KlayTokenSearchResponse : <code>Object</code>
<a name="KlayTokenSearchResponse"></a>

```javascript
{
	query: string | null;
	skip: number;
	limit: number;
	count: number;
	types: string[];
	items: Array<{
        address: string;
        info: KlayMainTokenInfo;
        create_transaction_hash: string;
        type: string;
        status: boolean;
	}>
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

#### TTokenSearchRequest : <code>Object</code>
<a name="TTokenSearchRequest"></a>

```javascript
{
        query?: string;
        types?: string;
}
```