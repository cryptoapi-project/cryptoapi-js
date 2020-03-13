# HOOKS cryptoapi-lib
This library provides hooks api methods to work with CryptoAPI.

## Configure API

The library provides the ability to pass a API url.

```javascript
import { Client } from 'cryptoapi-lib';

const options = {
    hooks: {
        baseUrl: 'http://localhost:8080',
    },
};

const client = new Client('YOUR-API-KEY', options);
```

#### Table of Contents
* [API](#api)
* [Typedefs](#typedefs)

## API

<dl>
<dt><a href="#hooks.getHookEvents">hooks.getHookEvents</a> ⇒<code><a href="#WebHookLogOutDTO">Promise&lt;WebHookLogOutDTO&gt;</a></code></dt></dt>
<dd></dd>
</dl>

#### <a name="hooks.getHookEvents">hooks.getHookEvents()</a> ⇒ <code><a href="#WebHookLogOutDTO">Promise&lt;WebHookLogOutDTO&gt;</a></code></dt></dt>
Returns JSON data about a web hook events such as block info, transactions or transfers.

```javascript
    import { Client } from 'cryptoapi-lib';
    const crypto = new Client('YOUR-API-KEY');
    crypto.api.hooks.getHookEvents(1, { limit: 1 }).then(console.log);
```

Example response:
```
{
  "only_failed": false,
  "skip": 0,
  "limit": 1,
  "type": "all",
  "count": 5749,
  "items": [
    {
      "id": 1,
      "user_id": 45,
      "hook_id": 1,
      "status": 0,
      "log_id": 4081,
      "data": {
        "size": 2001,
        "difficulty": "1",
        "total_difficulty": "10965821",
        "uncles": [
          
        ],
        "number": 6124340,
        "hash": "0xc30a84283efd01e14a8e71591113b46601ecc65c1972448f28968e1dfdcae0cb",
        "parent_hash": "0x7218f756b4fc9b80481240bed6c6ddf5a6d8d6647aeae44937c30f6c1dc33e03",
        "nonce": "0x0000000000000000",
        "sha3_uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "logs_bloom": "0x0000000000000008000000000000000100000000000004000000000002000000000000000400100001400000000000000800000000008004000000000004008080001000200800002000000a0000420004000000000400001000280000000000000000000000000000000000000000080000000000000000020000100000000000002000000000000000000060000010000008200000000000000000000000002000000000000400404000000004010000000010000000000000000000000000000000020000000001000000000000000000000000800000000000010000c0000000004001000000000000000000020000000008000000020000000000000000",
        "state_root": "0x6e05960c390691dc8e3ae7d2bf0f0602b65f4757051bfef6a84b6dfcf3ae0dbc",
        "miner": "0x0000000000000000000000000000000000000000",
        "extra_data": "0xd883010909846765746888676f312e31332e34856c696e757800000000000000b523fd993e300e1bec870448792dcf8e3c4bfad64d05dcbe981bdda16a484a4251e110065d72b87765f6ed2e4a7b3e9dc5c0a8af1690cb785032d172a2dc8a0d00",
        "gas_limit": 10000000,
        "gas_used": 406466,
        "utc": "2020-03-12T09:56:37.000Z",
        "count_transactions": 8
      }
    }
  ]
}
```


## Typedefs

#### ETH Typedefs

<dl>
<dt><a href="#WebHookLogOutDTO">WebHookLogOutDTO</a> : <code>Object</code></dt>
<dd></dd>
</dl>

#### WebHookLogOutDTO : <code>Object</code>
<a name="WebHookLogOutDTO"></a>

```javascript
{
    only_failed: boolean;
    skip: number;
    limit: number;
    type: string;
    items: {
        id: number,
        user_id: number,
        hook_id: number,
        status: number,
        log_id: number,
        data: any,
    }[];
}
```
