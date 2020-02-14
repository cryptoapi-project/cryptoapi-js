# KLAY API cryptoapi-lib
This library provides klay api methods to work with CryptoAPI.

## Configure API

The library provides the ability to pass a API url and testnet API url.

```javascript
import { Client } from 'cryptoapi-lib';

const options = {
    klay: {
        baseUrl: 'http://localhost:8080',
        testnet: {
            api: {
                baobab: 'http://localhost:8081',
            },
        },
    },
};

const client = new Client('YOUR-API-KEY', options);
```

#### Table of Contents
* [API](#api)
* [Typedefs](#typedefs)

## API

<dl>
<dt><a href="#klay.getNetworkInfo">klay.getNetworkInfo</a> ⇒<code><a href="#KlayNetworkInfo">Promise&lt;KlayNetworkInfo&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.estimateGas">klay.estimateGas</a> ⇒<code><a href="#EstimateGasResponse">Promise&lt;EstimateGasResponse&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getAddressesBalances">klay.getAddressesBalances</a> ⇒<code><a href="#KlayAddressBalance">Promise&lt;KlayAddressBalance[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getAddressesInfos">klay.getAddressesInfos</a> ⇒<code><a href="#KlayAddressInfo">Promise&lt;KlayAddressInfo[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getToken">klay.getToken</a> ⇒<code><a href="#KlayTokenInfo">Promise&lt;KlayTokenInfo&gt;</a></code></dt></dt>
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
<dt><a href="#klay.getBlock">klay.getBlock</a> ⇒<code><a href="#KlayBlockInfo">Promise&lt;KlayBlockInfo&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getBlocks">klay.getBlocks</a> ⇒<code><a href="#KlayBlocksResponse">Promise&lt;KlayBlocksResponse&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getContractInfo">klay.getContractInfo</a> ⇒<code><a href="#KlayContractInfo">Promise&lt;KlayContractInfo&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.callContract">klay.callContract</a> ⇒<code>Promise&lt;string&gt;</code></dt></dt>
<dd></dd>
<dt><a href="#klay.getContractLogs">klay.getContractLogs</a> ⇒<code><a href="#KlayContractLog">Promise&lt;KlayContractLog[]&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.decodeRawTransaction">klay.decodeRawTransaction</a> ⇒<code><a href="#KlayRawTransaction">Promise&lt;KlayRawTransaction&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.sendRawTransaction">klay.sendRawTransaction</a> ⇒<code>Promise&lt;string&gt;</code></dt></dt>
<dd></dd>
<dt><a href="#klay.getTransfers">klay.getTransfers</a> ⇒<code><a href="#KlayTransfers">Promise&lt;KlayTransfers&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getExternalTransactions">klay.getExternalTransactions</a> ⇒<code><a href="#KlayTransactionsIntersection">Promise&lt;KlayTransactionsIntersection&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getTransactionsBetweenAddresses">klay.getTransactionsBetweenAddresses</a> ⇒<code><a href="#KlayTransactionsBetweenAddresses">Promise&lt;KlayTransactionsBetweenAddresses&gt;</a></code></dt></dt>
<dd></dd>
<dt><a href="#klay.getFullTransaction">klay.getFullTransaction</a> ⇒<code>Promise&lt;FullKlayTransaction&gt;</code></dt></dt>
<dd></dd>
<dt><a href="#klay.getTransactionReceipt">klay.getTransactionReceipt</a> ⇒<code>Promise&lt;KlayTransactionReceipt&gt;</code></dt></dt>
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


#### <a name="klay.getToken">klay.getToken(address: string)</a> ⇒ <code><a href="#KlayTokenInfo">Promise&lt;KlayTokenInfo&gt;</a></code></dt></dt>
Returns JSON data about a klay token information.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | [Token address] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getToken('0x106c2dbabeb8c4932e3f68b76fb9665180b74587');
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

#### <a name="klay.getTokenBalanceByAddresses">klay.getTokenBalanceByAddresses(tokenBalanceRequest: <a href="#TTokenBalanceRequest">TTokenBalanceRequest</a>)</a> ⇒ <code><a href="#KlayBalanceTokensByHolder">Promise&lt;KlayBalanceTokensByHolder&gt;</a></code></dt></dt>
Returns JSON data about balance token by token and holder addresses.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| tokenBalanceRequest | <code><a href="#TTokenBalanceRequest">TTokenBalanceRequest</a></code> | [Token and holders addresses] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.eth.getTokenBalanceByAddresses({
        tokenAddress: '0x5ae86537ea087929a34b597480fd23144d2dd216',
        holderAddresses: ['0xd89f43605f4ccc0935afceba98f3d5d04ce2e390'],
    });
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

#### <a name="klay.getTokenBalancesByHolders">klay.getTokenBalancesByHolders(holders: string[], options?: <a href="#TPaginationOptions">TPaginationOptions</a>)</a> ⇒<code><a href="#KlayBalanceTokensByHolder">Promise&lt;KlayBalanceTokensByHolder[]&gt;</a></code></dt></dt>
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

#### <a name="klay.getTokenTransfers">klay.getTokenTransfers(transfersRequest: <a href="#TTokenTransfersRequest">TTokenTransfersRequest</a>, options?: <a href="#TPaginationOptions">TPaginationOptions</a>)</a> ⇒ <code><a href="#KlayTokenTransfersResponse">Promise&lt;KlayTokenTransfersResponse&gt;</a></code></dt></dt>
Returns JSON data with list transfer by token address.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| transfersRequest | <code><a href="#TTokenTransfersRequest">TTokenTransfersRequest</a></code> | [Token address and ethereum addresses] |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Count of skipping items and page items count] |

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

#### <a name="klay.getTokenTransfersByAddresses">klay.getTokenTransfersByAddresses(transfersRequest: <a href="#TTokenTransfersByAddressesRequest">TTokenTransfersByAddressesRequest</a>, options?: <a href="#TPaginationOptions">TPaginationOptions</a>)</a> ⇒ <code><a href="#KlayTokenTransfersResponse">Promise&lt;KlayTokenTransfersResponse&gt;</a></code></dt></dt>
Returns JSON data with list transfer by token address and ethereum addresses.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| transfersRequest | <code><a href="#TTokenTransfersByAddressesRequest">TTokenTransfersByAddressesRequest</a></code> | [Token address and ethereum addresses] |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Count of skipping items and page items count] |

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


#### <a name="klay.searchToken">klay.searchToken(searchRequest: <a href="#TTokenSearchRequest">TTokenSearchRequest</a>, options?: <a href="#TPaginationOptions">TPaginationOptions</a>)</a> ⇒<code><a href="#KlayTokenSearchResponse">Promise&lt;KlayTokenSearchResponse&gt;</a></code></dt></dt>
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
 #### <a name="klay.getContractInfo">klay.getContractInfo(address: string)</a> ⇒ <code><a href="#KlayContractInfo">Promise&lt;KlayContractInfo&gt;</a></code></dt></dt>
Returns JSON data about contract information.

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getContractInfo('0x77ac6721fd5c5e5e2b3169ffd648d1e419ae0353');
```

Example response:
```
{
    bytecode: "0x608060405234801561001057600080fd5b50610030336b033b2e3c9fd0803ce8000000640100000000610035810204565b610103565b600160a060020a038216151561004a57600080fd5b60025461006490826401000000006107886100ed82021704565b600255600160a060020a03821660009081526020819052604090205461009790826401000000006107886100ed82021704565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000828201838110156100fc57fe5b9392505050565b6107ca806101126000396000f3006080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100be578063095ea7b31461014857806318160ddd1461018057806323b872dd146101a75780632ff2e9dc146101d1578063313ce567146101e6578063395093511461021157806370a082311461023557806395d89b4114610256578063a457c2d71461026b578063a9059cbb1461028f578063dd62ed3e146102b3575b600080fd5b3480156100ca57600080fd5b506100d36102da565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561010d5781810151838201526020016100f5565b50505050905090810190601f16801561013a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015457600080fd5b5061016c600160a060020a0360043516602435610311565b604080519115158252519081900360200190f35b34801561018c57600080fd5b5061019561038f565b60408051918252519081900360200190f35b3480156101b357600080fd5b5061016c600160a060020a0360043581169060243516604435610395565b3480156101dd57600080fd5b5061019561050a565b3480156101f257600080fd5b506101fb61051a565b6040805160ff9092168252519081900360200190f35b34801561021d57600080fd5b5061016c600160a060020a036004351660243561051f565b34801561024157600080fd5b50610195600160a060020a03600435166105cf565b34801561026257600080fd5b506100d36105ea565b34801561027757600080fd5b5061016c600160a060020a0360043516602435610621565b34801561029b57600080fd5b5061016c600160a060020a036004351660243561066c565b3480156102bf57600080fd5b50610195600160a060020a036004358116906024351661074b565b60408051808201909152600b81527f53696d706c65546f6b656e000000000000000000000000000000000000000000602082015281565b6000600160a060020a038316151561032857600080fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a0383166000908152602081905260408120548211156103ba57600080fd5b600160a060020a03841660009081526001602090815260408083203384529091529020548211156103ea57600080fd5b600160a060020a03831615156103ff57600080fd5b600160a060020a038416600090815260208190526040902054610428908363ffffffff61077616565b600160a060020a03808616600090815260208190526040808220939093559085168152205461045d908363ffffffff61078816565b600160a060020a0380851660009081526020818152604080832094909455918716815260018252828120338252909152205461049f908363ffffffff61077616565b600160a060020a03808616600081815260016020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b6b033b2e3c9fd0803ce800000081565b601281565b6000600160a060020a038316151561053657600080fd5b336000908152600160209081526040808320600160a060020a038716845290915290205461056a908363ffffffff61078816565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a031660009081526020819052604090205490565b60408051808201909152600381527f53494d0000000000000000000000000000000000000000000000000000000000602082015281565b6000600160a060020a038316151561063857600080fd5b336000908152600160209081526040808320600160a060020a038716845290915290205461056a908363ffffffff61077616565b3360009081526020819052604081205482111561068857600080fd5b600160a060020a038316151561069d57600080fd5b336000908152602081905260409020546106bd908363ffffffff61077616565b3360009081526020819052604080822092909255600160a060020a038516815220546106ef908363ffffffff61078816565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561078257fe5b50900390565b60008282018381101561079757fe5b93925050505600a165627a7a72305820fb26d75c81f0e558c31d291dc21c8ee0d7a9aa9cd3dc1aadf353fd3549deda090029"
}
```

#### <a name="klay.callContract">klay.callContract(dataToCall: TContractCall)</a> ⇒<code>Promise&lt;string&gt;</code></dt></dt>
Executes a message call transaction.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| dataToCall | <code><a href="#TContractCall">TContractCall</a></code> | [Data to call contract] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.callContract({
        address: "0x77ac6721fd5c5e5e2b3169ffd648d1e419ae0353",
        bytecode: "0xa9059cbb0000000000000000000000008d09819b35c28280bf6fbcef84d01645ec9745590000000000000000000000000000000000000000000000000000000000000064",
        sender: "0x21507b4458ce97cb45eb6ee487b926b923668601",
        amount: 0
    });
```

Example response:
```
    0x0000000000000000000000000000000000000000000000000000000000000001
```

#### <a name="klay.getContractLogs">klay.getContractLogs(data: <a href="#TContractLogsRequest">TContractLogsRequest</a>)</a> ⇒<code><a href="#KlayContractLog">Promise&lt;KlayContractLog[]&gt;</a></code></dt></dt>

Method to get log contracts by passed data.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| data | <code><a href="#TContractLogsRequest">TContractLogsRequest</a></code> | [Data to get contract logs] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getContractLogs({
        from_block: 0,
        address: ["0x77ac6721fd5c5e5e2b3169ffd648d1e419ae0353"],
      });
```

Example response:
```
[
    {
        address: "0x77ac6721fd5c5e5e2b3169ffd648d1e419ae0353",
        data: "0x0000000000000000000000000000000000000000033b2e3c9fd0803ce8000000",
        topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x00000000000000000000000080ea9a01043e6575f259e87eefe15db33f69b713",
        ],
        log_index: 0,
        transaction_hash: "0x211c3ec0436527b84871f32c6f9b172dd4385f08ae5dec02a9b2d42190f1a75d",
        transaction_index: 0,
        block_hash: "0x96e5e4fda70b1aa71cbb41440508ec2b14b22574f6332b2d716819ba199e159e",
        block_number: 14664401,
    },
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
    data: "0x",
    gas: "6500000",
    gas_price: "3005000000000",
    ggg: "dasdasda",
    nonce: 8833539,
    r: "0x4ef1f13c58af9a9ac4be66b838a238b24db798d585d882865637fdc35bdc49c4",
    s: "0x4b7d1dfc3d9672080347a0d3559628f5f757bd6f6a005d1c4f7cdccce020ea02",
    signatures: ["0x1c", "0x4ef1f13c58af9a9ac4be66b838a238b24db798d585d882865637fdc35bdc49c4", "0x4b7d1dfc3d9672080347a0d3559628f5f757bd6f6a005d1c4f7cdccce020ea02"],
    to: "0x1de29f644d555fe9cc3241e1083de0868f959bfa",
    type: "LEGACY",
    v: "0x1c",
    value: "300000000000",
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
    count_transactions: 1,
    block_score: '0x1',
    total_block_score: '0x14'
}
```

#### <a name="klay.getBlocks">klay.getBlocks</a>(options?: <a href="#TPaginationOptions">TPaginationOptions</a>) ⇒ <code>Promise&lt;<a href="#KlayBlocksResponse">KlayBlocksResponse</a>&gt;</code></dt></dt>
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
            count_transactions: 1,
            block_score: '0x1',
            total_block_score: '0xe58f81'
        }
    ]
}
```


#### <a name="klay.getContractInfo">klay.getContractInfo(address: string)</a> ⇒ <code><a href="#KlayContractInfo">Promise&lt;KlayContractInfo&gt;</a></code></dt></dt>
Returns JSON data about contract information.

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getContractInfo('0x77ac6721fd5c5e5e2b3169ffd648d1e419ae0353');
```

Example response:
```
{
    bytecode: "0x608060405234801561001057600080fd5b50610030336b033b2e3c9fd0803ce8000000640100000000610035810204565b610103565b600160a060020a038216151561004a57600080fd5b60025461006490826401000000006107886100ed82021704565b600255600160a060020a03821660009081526020819052604090205461009790826401000000006107886100ed82021704565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000828201838110156100fc57fe5b9392505050565b6107ca806101126000396000f3006080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100be578063095ea7b31461014857806318160ddd1461018057806323b872dd146101a75780632ff2e9dc146101d1578063313ce567146101e6578063395093511461021157806370a082311461023557806395d89b4114610256578063a457c2d71461026b578063a9059cbb1461028f578063dd62ed3e146102b3575b600080fd5b3480156100ca57600080fd5b506100d36102da565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561010d5781810151838201526020016100f5565b50505050905090810190601f16801561013a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015457600080fd5b5061016c600160a060020a0360043516602435610311565b604080519115158252519081900360200190f35b34801561018c57600080fd5b5061019561038f565b60408051918252519081900360200190f35b3480156101b357600080fd5b5061016c600160a060020a0360043581169060243516604435610395565b3480156101dd57600080fd5b5061019561050a565b3480156101f257600080fd5b506101fb61051a565b6040805160ff9092168252519081900360200190f35b34801561021d57600080fd5b5061016c600160a060020a036004351660243561051f565b34801561024157600080fd5b50610195600160a060020a03600435166105cf565b34801561026257600080fd5b506100d36105ea565b34801561027757600080fd5b5061016c600160a060020a0360043516602435610621565b34801561029b57600080fd5b5061016c600160a060020a036004351660243561066c565b3480156102bf57600080fd5b50610195600160a060020a036004358116906024351661074b565b60408051808201909152600b81527f53696d706c65546f6b656e000000000000000000000000000000000000000000602082015281565b6000600160a060020a038316151561032857600080fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a0383166000908152602081905260408120548211156103ba57600080fd5b600160a060020a03841660009081526001602090815260408083203384529091529020548211156103ea57600080fd5b600160a060020a03831615156103ff57600080fd5b600160a060020a038416600090815260208190526040902054610428908363ffffffff61077616565b600160a060020a03808616600090815260208190526040808220939093559085168152205461045d908363ffffffff61078816565b600160a060020a0380851660009081526020818152604080832094909455918716815260018252828120338252909152205461049f908363ffffffff61077616565b600160a060020a03808616600081815260016020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b6b033b2e3c9fd0803ce800000081565b601281565b6000600160a060020a038316151561053657600080fd5b336000908152600160209081526040808320600160a060020a038716845290915290205461056a908363ffffffff61078816565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a031660009081526020819052604090205490565b60408051808201909152600381527f53494d0000000000000000000000000000000000000000000000000000000000602082015281565b6000600160a060020a038316151561063857600080fd5b336000908152600160209081526040808320600160a060020a038716845290915290205461056a908363ffffffff61077616565b3360009081526020819052604081205482111561068857600080fd5b600160a060020a038316151561069d57600080fd5b336000908152602081905260409020546106bd908363ffffffff61077616565b3360009081526020819052604080822092909255600160a060020a038516815220546106ef908363ffffffff61078816565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561078257fe5b50900390565b60008282018381101561079757fe5b93925050505600a165627a7a72305820fb26d75c81f0e558c31d291dc21c8ee0d7a9aa9cd3dc1aadf353fd3549deda090029"
}
```

#### <a name="klay.callContract">klay.callContract(dataToCall: TContractCall)</a> ⇒<code>Promise&lt;string&gt;</code></dt></dt>
Executes a message call transaction.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| dataToCall | <code><a href="#TContractCall">TContractCall</a></code> | [Data to call contract] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.callContract({
        address: "0x77ac6721fd5c5e5e2b3169ffd648d1e419ae0353",
        bytecode: "0xa9059cbb0000000000000000000000008d09819b35c28280bf6fbcef84d01645ec9745590000000000000000000000000000000000000000000000000000000000000064",
        sender: "0x21507b4458ce97cb45eb6ee487b926b923668601",
        amount: 0
    });
```

Example response:
```
    0x0000000000000000000000000000000000000000000000000000000000000001
```

#### <a name="klay.getContractLogs">klay.getContractLogs(data: <a href="#TContractLogsRequest">TContractLogsRequest</a>)</a> ⇒<code><a href="#KlayContractLog">Promise&lt;KlayContractLog[]&gt;</a></code></dt></dt>

Method to get log contracts by passed data.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| data | <code><a href="#TContractLogsRequest">TContractLogsRequest</a></code> | [Data to get contract logs] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getContractLogs({
        from_block: 0,
        address: ["0x77ac6721fd5c5e5e2b3169ffd648d1e419ae0353"],
      });
```

Example response:
```
[
    {
        address: "0x77ac6721fd5c5e5e2b3169ffd648d1e419ae0353",
        data: "0x0000000000000000000000000000000000000000033b2e3c9fd0803ce8000000",
        topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x00000000000000000000000080ea9a01043e6575f259e87eefe15db33f69b713",
        ],
        log_index: 0,
        transaction_hash: "0x211c3ec0436527b84871f32c6f9b172dd4385f08ae5dec02a9b2d42190f1a75d",
        transaction_index: 0,
        block_hash: "0x96e5e4fda70b1aa71cbb41440508ec2b14b22574f6332b2d716819ba199e159e",
        block_number: 14664401,
    },
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
    data: "0x",
    gas: "6500000",
    gas_price: "3005000000000",
    ggg: "dasdasda",
    nonce: 8833539,
    r: "0x4ef1f13c58af9a9ac4be66b838a238b24db798d585d882865637fdc35bdc49c4",
    s: "0x4b7d1dfc3d9672080347a0d3559628f5f757bd6f6a005d1c4f7cdccce020ea02",
    signatures: ["0x1c", "0x4ef1f13c58af9a9ac4be66b838a238b24db798d585d882865637fdc35bdc49c4", "0x4b7d1dfc3d9672080347a0d3559628f5f757bd6f6a005d1c4f7cdccce020ea02"],
    to: "0x1de29f644d555fe9cc3241e1083de0868f959bfa",
    type: "LEGACY",
    v: "0x1c",
    value: "300000000000",
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

#### <a name="klay.getTransfers">klay.getTransfers</a>(data: <a href="#TTransferRequest">TTransferRequest</a>, options?: <a href="#TPaginationOptions">TPaginationOptions</a>) ⇒<code><a href="#KlayTransfers">Promise&lt;KlayTransfers&gt;</a></code></dt></dt>
Return list of transactions by addresses.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| data | <code><a href="#TTransferRequest">TTransferRequest</a></code> | [Data to get history by klay addresses] |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Count of skipping items and page items count] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getTransfers({
        addresses: ["0x4937a6f664630547f6b0c3c235c4f03a64ca36b1"],
    }, {
        skip: 1,
        limit: 1
    });
```

Example response:
```
{
    "addresses": [
        "0x4937a6f664630547f6b0c3c235c4f03a64ca36b1"
    ],
    "limit": 1,
    "skip": 1,
    "items": [
        {
            block_number: 10415,
            from: "0x4937a6f664630547f6b0c3c235c4f03a64ca36b1",
            gas: 300000,
            gas_price: "0x5d21dba00",
            hash: "0x12e71be0e685bfb9572d304c00d3a287ff3e9fece36999989c8f5c638f0690e7",
            internal: false,
            to: "0x9bf34a006086b50f6571c5c026a4b6f2b11baaac",
            utc: "2019-06-26T13:05:11.000Z",
            value: "0x152d02c7e14af6800000"
        }
    ],
    "count": 3
}
```

#### <a name="klay.getExternalTransactions">klay.getExternalTransactions(addresses: string[], options?: <a href="#TPaginationOptions">TPaginationOptions</a>)</a> ⇒<code><a href="#KlayTransactionsIntersection">Promise&lt;KlayTransactionsIntersection&gt;</a></code></dt></dt>
Return list of transactions interception by addresses.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| addresses | <code>string[]</code> | [Klay Addresses] |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Count of skipping items and page items count] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getExternalTransactions(['0x4937a6f664630547f6b0c3c235c4f03a64ca36b1'], {
        limit: 1
    });
```

Example response:
```
{
    "addresses": [
        "0x4937a6f664630547f6b0c3c235c4f03a64ca36b1",
    ],
    "limit": 1,
    "skip": 0,
    "count": 3,
    "items": [
        {
            block_hash: "0x39008ace108a912e11599dcc6fbc89a9af3e71fa97f5598ad19c3aefe877bc4b",
            block_number: 10489,
            code_format: null,
            fee_payer: null
            fee_payer_signatures: [],
            fee_ratio: null,
            from: "0x4937a6f664630547f6b0c3c235c4f03a64ca36b1",
            gas: 300000,
            gas_price: "0x5d21dba00",
            hash: "0x774efb177c9a6e091049e408e83e1295bb070c92d210b832e575bc1d5cd231ea",
            human_readable: null,
            input: "0x",
            internal_transactions: [],
            key: null,
            nonce: 2,
            sender_tx_hash: "0x774efb177c9a6e091049e408e83e1295bb070c92d210b832e575bc1d5cd231ea",
            to: "0xf90675a56a03f836204d66c0f923e00500ddc90a",
            transaction_index: 0,
            type: "TxTypeLegacyTransaction",
            type_int: 0,
            utc: "2019-06-26T13:06:25.000Z",
            value: "0x1dc74be914d16aa400000",
            signatures: [
                {
                    r: "0x1915642607b81509bfcf9fde097f8a6390dc37b791ba4f81e5b66594b85290c3",
                    s: "0x2479d5237b6bcd60c69b011ae50d17a05856b9a092d30d094774ea4c2fb230d0",
                    v: "0x7f5"
                }
            ]
        }
    ]
}
```

#### <a name="klay.getTransactionsBetweenAddresses">klay.getTransactionsBetweenAddresses(data: <a href="#TrxsBetweenAddressesRequest">TrxsBetweenAddressesRequest</a>, options?: <a href="#TPaginationOptions">TPaginationOptions</a>)</a> ⇒<code><a href="#KlayTransactionsBetweenAddresses">Promise&lt;KlayTransactionsBetweenAddresses&gt;</a></code></dt></dt>
Return list of transactions between addresses.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| data | <a href="#TrxsBetweenAddressesRequest">TrxsBetweenAddressesRequest</a> | [Data include fields ethereum addresses.] |
| options? | <code><a href="#TPaginationOptions">TPaginationOptions</a></code> | [Count of skipping items and page items count] |

```javascript
    import { Client } from 'cryptoapi';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getTransactionsBetweenAddresses({
        from: '0x4937a6f664630547f6b0c3c235c4f03a64ca36b1',
        to: '0xfcd0ea52081a6d0c75ffddb035a91a782f4af027',
});
```

Example response:
```
{
    "items":[
        {
            block_hash: "0x382da8853b803cf3cdee9f175956b668654c219d18b0a69dc8d18b68d00d1848",
            block_number: 9998,
            code_format: null,
            fee_payer: null,
            fee_payer_signatures: [],
            fee_ratio: null,
            from: "0x4937a6f664630547f6b0c3c235c4f03a64ca36b1",
            gas: 300000,
            gas_price: "0x5d21dba00",
            hash: "0x879c7099922be963176af976022a858e02fd0b4f1923b9f5bf48c9099b305d07",
            human_readable: null,
            input: "0x",
            internal_transactions: [],
            key: null,
            nonce: 0,
            sender_tx_hash: "0x879c7099922be963176af976022a858e02fd0b4f1923b9f5bf48c9099b305d07",
            signatures: [
                {
                    r: "0x6e911d9b8d00b997881c0f7c1e8afe3f1b437ae5461250aadc7aad6cfd881c4a",
                    s: "0x7613bc0aaa4d0832f1b189a44e31169177f8b592a015d98ec695078ed3ff5b78",
                    v: "0x7f5"
                }
            ],
            to: "0xfcd0ea52081a6d0c75ffddb035a91a782f4af027",
            transaction_index: 0,
            type: "TxTypeLegacyTransaction",
            type_int: 0,
            utc: "2019-06-26T12:58:14.000Z",
            value: "0xde0b6b3a7640000",
        }
    ],
    "total": 1
}
```

#### <a name="klay.getFullTransaction">klay.getFullTransaction(hash: string)</a> ⇒<code><a href="#KlayFullTransaction">Promise&lt;KlayFullTransaction&gt;</a></code></dt></dt>
Returns JSON data about full transaction information.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | [Transaction hash] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    const result = await crypto.api.klay.getFullTransaction('0x879c7099922be963176af976022a858e02fd0b4f1923b9f5bf48c9099b305d07')
```

Example response:
```
{
    block_hash: "0x382da8853b803cf3cdee9f175956b668654c219d18b0a69dc8d18b68d00d1848",
    block_number: 9998,
    code_format: null,
    fee_payer: null,
    fee_payer_signatures: [],
    fee_ratio: null,
    from: "0x4937a6f664630547f6b0c3c235c4f03a64ca36b1",
    gas: 300000,
    gas_price: "0x5d21dba00",
    hash: "0x879c7099922be963176af976022a858e02fd0b4f1923b9f5bf48c9099b305d07",
    human_readable: null,
    input: "0x",
    internal_transactions: [],
    key: null,
    nonce: 0,
    to: "0xfcd0ea52081a6d0c75ffddb035a91a782f4af027",
    transaction_index: 0,
    type: "TxTypeLegacyTransaction",
    type_int: 0,
    utc: "2019-06-26T12:58:14.000Z",
    value: "0xde0b6b3a7640000",
    sender_tx_hash: "0x879c7099922be963176af976022a858e02fd0b4f1923b9f5bf48c9099b305d07",
    receipt: {
        contract_address: null,
        gas_used: 21000,
        logs: [],
        status: true,
    }
    signatures: [
        {
            r: "0x6e911d9b8d00b997881c0f7c1e8afe3f1b437ae5461250aadc7aad6cfd881c4a",
            s: "0x7613bc0aaa4d0832f1b189a44e31169177f8b592a015d98ec695078ed3ff5b78",
            v: "0x7f5",
        }
    ]
```

#### <a name="klay.getTransactionReceipt">klay.getTransactionReceipt(hash: string)</a> ⇒<code><a href="#KlayTransactionReceipt">Promise&lt;KlayTransactionReceipt&gt;</a></code></dt></dt>
Returns JSON data about receipt transaction information.

Input data:

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | [Transaction hash] |

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('******');
    crypto.api.klay.getTransactionReceipt('0x879c7099922be963176af976022a858e02fd0b4f1923b9f5bf48c9099b305d07')
```

Example response:
```    
{
    block_hash: "0x382da8853b803cf3cdee9f175956b668654c219d18b0a69dc8d18b68d00d1848"
    block_number: 9998
    contract_address: null
    from: "0x4937a6f664630547f6b0c3c235c4f03a64ca36b1"
    gas_used: 21000
    hash: "0x879c7099922be963176af976022a858e02fd0b4f1923b9f5bf48c9099b305d07"
    logs: []
    status: true
    to: "0xfcd0ea52081a6d0c75ffddb035a91a782f4af027"
    transaction_index: 0
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
<dt><a href="#KlayBlockInfo">KlayBlockInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayBlocksResponse">KlayBlocksResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayContractInfo">KlayContractInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TContractCall">TContractCall</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TContractLogsRequest">TContractLogsRequest</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayContractLog">KlayContractLog</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayRawTransaction">KlayRawTransaction</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TTransferRequest">TTransferRequest</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTransfers">KlayTransfers</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTransactionsIntersection">KlayTransactionsIntersection</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTransaction">KlayTransaction</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayInternalTransaction">KlayInternalTransaction</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Signature">Signature</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TrxsBetweenAddressesRequest">TrxsBetweenAddressesRequest</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTransactionsBetweenAddresses">KlayTransactionsBetweenAddresses</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayReceiptLog">KlayReceiptLog</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayFullTransactionReceipt">KlayFullTransactionReceipt</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayFullTransaction">KlayFullTransaction</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KlayTransactionReceipt">KlayTransactionReceipt</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TTokenBalanceRequest">TTokenBalanceRequest</a> : <code>Object</code></dt>
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

#### TTokenSearchRequest : <code>Object</code>
<a name="TTokenSearchRequest"></a>

```javascript
{
        query?: string;
        types?: string;
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
    count_transactions: 1;
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

#### KlayContractInfo : <code>Object</code>
<a name="KlayContractInfo"></a>

```javascript
{
    bytecode: string;
}
```

#### TContractCall : <code>Object</code>
<a name="TContractCall"></a>

```javascript
{
    address: string;
    sender: string;
    amount: number;
    bytecode: string;
}
```

#### TContractLogsRequest : <code>Object</code>
<a name="TContractLogsRequest"></a>

```javascript
{
    from_block: number;
    to_block: number;
    addresses: string[];
    topics: string[];    
}
```

#### KlayContractLog : <code>Object</code>
<a name="KlayContractLog"></a>

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

#### KlayRawTransaction : <code>Object</code>
<a name="KlayRawTransaction"></a>

```javascript
{
	type: string;
	gas_price: string;
	gas: string;
	from?: string;
	human_readable?: boolean;
	fee_ratio?: string;
	code_format?: string;
	fee_payer?: string;
	payer_v?: string;
	payer_r?: string;
	payer_s?: string;
	fee_payer_signatures?: Array<string[]|string>;
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

#### TTransferRequest : <code>Object</code>
<a name="TTransferRequest"></a>

```javascript
{
	addresses: string[];
	positive?: boolean;
}
```

#### KlayTransfers : <code>Object</code>
<a name="KlayTransfers"></a>

```javascript
{
    addresses: string[];
    limit: number;
    skip: number;
    items: Array<{
        block_number: number;
        from: string;
        to: string;
        value: string;
        hash: string;
        gas: number;
        gas_price: string;
        internal: boolean;
        utc: string;
    }>;
    count: number;
}
```

#### KlayTransactionsIntersection : <code>Object</code>
<a name="KlayTransactionsIntersection"></a>

```javascript
{
    addresses: string[];
    limit: number;
    skip: number;
    items: Array<KlayTransaction>;
    count: number;
}
```

#### KlayTransaction : <code>Object</code>
<a name="KlayTransaction"></a>

```javascript
{
    block_hash: string;
    block_number: number;
    utc: string;
    from: string;
    gas: number;
    gas_price: string;
    hash: string;
    input: string;
    nonce: number;
    to: string;
    transaction_index: number;
    value: string;
    internal_transactions: KlayInternalTransaction[];
    type: string;
    type_int: number;
    code_format: string|null;
    fee_payer: string|null;
    fee_payer_signatures: Signature[]|null;
    fee_ratio: string|null;
    human_readable: boolean|null;
    key: string|null;
    sender_tx_hash: string|null;
    signatures: Signature[];
}
```

#### KlayInternalTransaction : <code>Object</code>
<a name="KlayInternalTransaction"></a>

```javascript
{
	to: string;
	from: string;
	value: string;
	input: string;
	is_suicide: boolean;
	type: string[];
}
```

#### Signature : <code>Object</code>
<a name="Signature"></a>

```javascript
{
    s: string;
    r: string;
    v: string;
}
```

#### TrxsBetweenAddressesRequest : <code>Object</code>
<a name="TrxsBetweenAddressesRequest"></a>

```javascript
{
    from: string;
    to: string;
```

#### KlayTransactionsBetweenAddresses : <code>Object</code>
<a name="KlayTransactionsBetweenAddresses"></a>

```javascript
{
    total: number;
    items: KlayTransaction[];
}
```

#### KlayReceiptLog : <code>Object</code>
<a name="KlayReceiptLog"></a>

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

#### KlayReceiptLog : <code>Object</code>
<a name="KlayReceiptLog"></a>

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

#### KlayFullTransactionReceipt : <code>Object</code>
<a name="KlayFullTransactionReceipt"></a>

```javascript
{
    contract_address: string|null;
    gas_used: number;
    logs: Array<KlayReceiptLog>;
    status: boolean;
}   
```

#### KlayFullTransaction : <code>Object</code>
<a name="KlayFullTransaction"></a>

```javascript
{
    receipt: KlayFullTransactionReceipt;
    block_hash: string;
    block_number: number;
    utc: string;
    from: string;
    gas: number;
    gas_price: string;
    hash: string;
    input: string;
    nonce: number;
    to: string;
    transaction_index: number;
    value: string;
    internal_transactions: KlayInternalTransaction[];
    type: string;
    type_int: number;
    code_format: string|null;
    fee_payer: string|null;
    fee_payer_signatures: Signature[]|null;
    fee_ratio: string|null;
    human_readable: boolean|null;
    key: string|null;
    sender_tx_hash: string|null;
    signatures: Signature[];
}
```

#### KlayTransactionReceipt : <code>Object</code>
<a name="KlayTransactionReceipt"></a>

```javascript
    block_hash: string;
    block_number: number;
    contract_address: string|null;
    gas_used: number;
    status: Boolean;
    from: string;
	hash: string;
	to: string;
	transaction_index: number;
    logs: null|Array<KlayReceiptLog>;
```


#### TPaginationOptions : <code>Object</code>
<a name="TPaginationOptions"></a>

```javascript
{
   skip?: number;
   limit?: number;
}
```

#### TTokenBalanceRequest : <code>Object</code>
<a name="TTokenBalanceRequest"></a>

```javascript
{
    tokenAddress: string;
    holderAddresses: string[]
}
```
