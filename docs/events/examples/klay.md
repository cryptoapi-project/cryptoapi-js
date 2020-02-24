# KLAY events examples

All subscribers are listed below:

<dl>
<dt><a href="#onBlock">klay.onBlock</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onAddressTransactions">klay.onAddressTransactions</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTokenTransfers">klay.onTokenTransfers</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTokenBalance">klay.onTokenBalance</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onContractLog">klay.onContractLog</a></dt>
<dd></dd>
</dl>
<dl>
<dt><a href="#onTransactionConfirmations">klay.onTransactionConfirmations</a></dt>
<dd></dd>
<dd></dd>
</dl>
<dl>
<dt><a href="#onAddressBalance">klay.onAddressBalance</a></dt>
<dd></dd>
</dl>

#### <a name="onBlock">onBlock</a>(confirmations: number, callback: (notification:  <a name="KlayBlockNotification">KlayBlockNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');
const subscriptionId = await client.events.klay.onBlock(1, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.klay.onBlock(1, (message) => { console.log(message) });

// Notification example
> {
    size: '0x4db',
    block_score: '0x1',
    total_block_score: '0x50d158',
    number: '0x50d157',
    hash: '0x6d507284e097610d2e1d6b029ff935de7383ec6bfb14d03ef10796104ad5d6ff',
    parent_hash: '0xf2600dfcd4271dcbd62f6c484f302f5cbd219ae7bccda32ab52c7e08805a2d68',
    reward: '0xffb11e6e660f76e54cffee6f7eaac36221cc42c4',
    governance_data: '0x',
    vote_data: '0x',
    timestamp_fos: '0x60',
    logs_bloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    state_root: '0xe6029ff177eb13ed1edb4a468a8f34cc8db3566895eaf4c306bd5158c6d7056a',
    extra_data: '0xd883010000846b6c617988676f312e31322e35856c696e757800000000000000f90304f8e794571e53df607be97431a5bbefca1dffe5aef56f4d945cb1a7dccbd0dc446e3640898ede8820368554c8945e59db28cef098d5a2e877f84127aed10d7378f2946873352021fe9226884616dc6f189f289aeb0cc5946f6770f1f67f44fb15b335b49581ad6b935d963a948a88a093c05376886754a9b70b0d0a826a5e64be949419fa2e3b9eb1158de31be66c586a52f49c5de79499fb17d324fa0e07f23b49d09028ac0919414db694b74ff9dea397fe9e231df545eb53fe2adf776cb294b9456fd65a6810b19df24832c50b2e61a41867f894c032c34cb9fe064fe435199e1078dd8756a166b5b841f91ad9af6c887edee0cd084e601105186277b9237e9afeaa6d059c11057606e74367649ee1f14671412992d2ab9a1538a629b1d0fa8ee512cc2a635ec6378d1201f901d5b8416792a627d9848fea8051995c7ee9c8c3eadd4d60d97cc41750b138f64cb4c6b472c4d5bf179c3a1e2449db8f8e1e64092ed3dd90d1da90480697997894af6a4101b841bb09420349791e842602e5ba5fe361fb14e7e44c25a0f13b6ceb0be0d8c42b2a1f281dee286d6c8cadc12ae0d7f75b0ed9488328e487613b74fd0726cdbd2bfa01b841b96cf9eb6c2ed8c735857084a9d93a8e8f253fd93fe9f6d0c8f27c21d2ca6d956259e539a0d8b2a38e3c9cafe3f3df29969d268aac98fea636455f295f6a082a00b841d7ba69dbcfc05caf586fdc1c422b0d94281001848edbec48d86dff2215772cd24dc72946c6cd05c3e74ce0f62b87406f28a8ecfc9e4f0da1357b328f5abfe22c01b8415e4bc3f41d5b9cf8e1086e2520252bb416bb5fe7d51c2506e1d91989494a9f6f48165bd4c46afc83527aca1c64cf6d4ea4158febfc07270526abfb8d3152143c00b841d109daebb3d582e9b3f71f071faa01c90546bd611cb706871d7d8ba7c193e19b3cbc0523658775eff64f96f88b0db89876e95730b7b11aa3b4a3c6b870f10d0501b84193339e0386302b955b8ef3e2636b973bb1308b0275cbb0ada9fd673692162522252510b5d42d4ea894f54e0b726795a50907896b7beeb146c6cfbe5f3629f85e01',
    gas_used: '0x0',
    utc: '2019-08-26T17:41:18.000Z',
    count_transactions: 0
}
```

#### <a name="onAddressTransactions">onAddressTransactions</a>({ address, confirmations }: <a name="AddressSubscription">AddressSubscription</a>, callback: (notification: <a name="KlayTransactionNotification">KlayTransactionNotification</a>) => void, ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.klay.onAddressTransactions({
    address: '0xb8dc7b6b90019b4978fa6580f9131308cd2fd4a0',
    confirmations: 1,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.klay.onAddressTransactions({
    address: '0xb8dc7b6b90019b4978fa6580f9131308cd2fd4a0',
    confirmations: 1,
}, (message) => { console.log(message) });

// Notification example
> {
    block_hash: '0xe11a51247ae602ad9b2c67b72472fa074e10b43ed5baf8394d909547f27d996b',
    block_number: 5301870,
    transaction_index: 0,
    type: 'TxTypeFeeDelegatedSmartContractExecution',
    type_int: 49,
    utc: '2019-08-26T19:11:17.000Z',
    from: '0xb8dc7b6b90019b4978fa6580f9131308cd2fd4a0',
    gas: 85854,
    gas_price: '0x5d21dba00',
    hash: '0x994860e83cc7e3dcb1cd5fa54b080f0f50829148bd0e557156e6ab545a31ddd4',
    input: '0x2f358dd4000000000000000000000000931ac1c5337d60d924e7ab822a06925fecdba3770000000000000000000000000000000000000000000000008ac7230489e800006333343630613466643038663434643239316434666634346335396564663031',
    nonce: 145,
    to: '0x04c690a2ce3552666ca9f195ad3db40e5735b80b',
    value: '0x0',
    internal_transactions: [
      {
        to: '0xc108f426b44cba22f5fa18a66aeb985cd11c3218',
        from: '0x04c690a2ce3552666ca9f195ad3db40e5735b80b',
        value: '0',
        input: '0xa9059cbb000000000000000000000000931ac1c5337d60d924e7ab822a06925fecdba3770000000000000000000000000000000000000000000000008ac7230489e80000',
        type: 'CALL'
      }
    ]

}
```

#### <a name="onTokenTransfers">onTokenTransfers</a>({ token, address, confirmations }: <a name="TokenSubscription">TokenSubscription</a>, callback: (notification: <a name="TransferNotification">TransferNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.klay.onTokenTransfers({
    token: '0x8bb7e8b0e476afa4c2c6863e33ba065d53eeffa5',
    address: '0xc4e0d494faf1986912ca18e36c7453b242891cec',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.klay.onTokenTransfers({
    token: '0x8bb7e8b0e476afa4c2c6863e33ba065d53eeffa5',
    address: '0xc4e0d494faf1986912ca18e36c7453b242891cec',
    confirmations: 1,
}, (message) => { console.log(message) });

// Notification example
> {
    type: 'ERC20',
    execute_address: '0xc4e0d494faf1986912ca18e36c7453b242891cec',
    from: '0x0000000000000000000000000000000000000000',
    to: '0xc4e0d494faf1986912ca18e36c7453b242891cec',
    value: '0x000000000000000000000000000000000000000000adb53acfa41aee12000000',
    address: '0x8bb7e8b0e476afa4c2c6863e33ba065d53eeffa5',
    block_number: 11056254,
    transaction_hash: '0x4553579edd28a4171a9d66d6dcaca8287e174fee7426f8a2a124bb6739ee2082',
    transaction_index: 2,
    utc: '2019-11-01T09:50:00.000Z'
}
```

#### <a name="onTokenBalance">onTokenBalance</a>({ token, address, confirmations }: <a name="TokenSubscription">TokenSubscription</a>, callback: (notification: <a name="TokenBalanceNotification">TokenBalanceNotification</a>) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.klay.onTokenBalance({
    token: '0x8bb7e8b0e476afa4c2c6863e33ba065d53eeffa5',
    address: '0xc4e0d494faf1986912ca18e36c7453b242891cec',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.klay.onTokenBalance({
    token: '0x8bb7e8b0e476afa4c2c6863e33ba065d53eeffa5',
    address: '0xc4e0d494faf1986912ca18e36c7453b242891cec',
    confirmations: 2,
}, (message) => { console.log(message) });

// Notification example
> {
    address: '0x8bb7e8b0e476afa4c2c6863e33ba065d53eeffa5',
    holder: '0xc4e0d494faf1986912ca18e36c7453b242891cec',
    balance: '210000000000000000000000000'
}
```

#### <a name="onContractLog">onContractLog</a>({  address, confirmations, from, to, topics  }: ContractLogSubscription, callback: (notification: ContractLogNotification) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.klay.onContractLog({
    address: '0x0fe647def2783f23bde95e5a22264a155536d6ab',
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.klay.onContractLog({
    address: '0x0fe647def2783f23bde95e5a22264a155536d6ab',
}, (message) => { console.log(message) });

// Notification example
> {
    address: '0x0fe647def2783f23bde95e5a22264a155536d6ab',
    data: '0x0000000000000000000000000000000000000000000000000000000011e1a300',
    topics: [
      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      '0x0000000000000000000000006ec68c8c045e026b5e2e03de9dc673682645ab88',
      '0x000000000000000000000000d7eef3ebed394d43ef41fe0ad0bb3afe4d4713b2'
    ],
    log_index: 371,
    transaction_hash: '0x1d2a07ffffb971ba3ebee438749d26735d39891a65a36519dd0e70dcae1da5c2',
    transaction_index: 147,
    block_hash: '0x3d76e29dc6dd34c26d75cf780f184077d06e4242de9118fcfb1cc797307741cd',
    block_number: 11056613,
}
```

#### <a name="onTransactionConfirmations">onTransactionConfirmations</a>({ hash, confirmations }: TransactionConfirmationSubscription, callback: (notification: TransactionConfirmationNotification) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.klay.onTransactionConfirmations({
    hash: '0xfffb50b8c1fcbff721d0a3c5207047ed805b1eb538da59ee8edc1911744559f1',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.klay.onTransactionConfirmations({
    hash: '0xfffb50b8c1fcbff721d0a3c5207047ed805b1eb538da59ee8edc1911744559f1',
    confirmations: 2,
}, (message) => { console.log(message) });

// Notification example
> {
    hash: '0xfffb50b8c1fcbff721d0a3c5207047ed805b1eb538da59ee8edc1911744559f1',
    confirmations: 97
}
```

#### <a name="onAddressBalance">onAddressBalance</a>({ address, confirmations }: AddressSubscription, callback: (notification: BalanceNotification) => void) ⇒ <code>Promise&lt;number&gt;</code>

```javascript
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');

const subscriptionId = await client.events.klay.onAddressBalance({
    address: '0xea67ecf8f7fa613f16634b30cb95e4ba289ae40c',
    confirmations: 2,
}, (message) => { console.log(message) });

// By subscriptionId you can unsubscribe, but if you don't need subscriptionId, just use:
client.events.klay.onAddressBalance({
    address: '0xea67ecf8f7fa613f16634b30cb95e4ba289ae40c',
    confirmations: 2,
}, (message) => { console.log(message) });

// Notification example
> {
    address: '0xea67ecf8f7fa613f16634b30cb95e4ba289ae40c',
    balance: '22274450925000000001'
}

```
