# cryptoapi-lib

Pure TypeScript crypto library for node.js and browsers. Can be used to subscribe, unsubscribe eth events, get eth network information.

#### Table of Contents
1. [Installation](#installation)
2. [Examples](#examples)
3. [Usage](#usage)
4. [Building](#building)
5. [License](#license)

#### Installation
To include cryptoapi-lib in Node, first install with npm.
```
$ npm install --save cryptoapi-lib
```
#### Examples

##### CommonJS

```js
const cryptoapi = require('cryptoapi-lib');
const crypto = new cryptoapi.Client('YOUR-API-KEY');
const result = await crypto.api.eth.getNetworkInfo();
crypto.events.eth.onBlock(1, (event) => { console.log(event); });
```

##### ES Module
```js
import { Client } from 'cryptoapi-lib';
const crypto = new Client('YOUR-API-KEY');
const result = await crypto.api.eth.getNetworkInfo();
crypto.events.eth.onBlock(1, (event) => { console.log(event); });
```

##### Browser

If you're keeping things super simple, just include a file as a script like so:

```html
<script src="node_modules/cryptoapi-lib/dist/bundles/cryptoapi-lib.js"></script>
```

or

```html
<script src="node_modules/cryptoapi-lib/dist/bundles/cryptoapi-lib.min.js"></script>
```

#### Usage

Before calling API methods and subscribing to events, you need to create client:

```javascript
const crypto = new cryptoapi.Client('YOUR-API-KEY');
```

* Call API method. For example, get Ethereum network info:

```javascript
const result = await crypto.api.eth.getNetworkInfo();
```

Full documentation about API methods you find by [following link](docs/api/index.md).

* Set subscription on new Ethereum block:

```javascript
crypto.events.eth.onBlock(1, (event) => { console.log(event); });
```

Full documentation about websocket notifications you find by [following link](docs/events/index.md).

#### Building
To build the library or its components yourself, clone it from GitHub and install the development dependencies:

```bash
$ git clone https://github.com/cryptoapi-project/cryptoapi-js
$ cd cryptoapi-js
$ npm install
$ npm run build
```

All compiled files will be located in the directory dist.

#### License
The MIT License (MIT)

Copyright (c) 2019 PixelPlex Inc. <https://pixelplex.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
