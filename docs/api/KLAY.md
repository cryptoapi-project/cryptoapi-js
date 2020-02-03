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
