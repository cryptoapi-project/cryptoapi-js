# Cryptoapi-lib

Pure TypeScript crypto library for node.js and browsers. Can be used to subscribe, unsubscribe eth events, get eth network information.

#### Table of Contents
1. [Usage](#Usage)
2. [Full API Reference](#full-api-reference)
3. [Building](#building)
4. [License](#license)

## Usage
Below are some of the most common ways to usage cryptoapi-lib.

### Node
#### Installation
To include cryptoapi-lib in Node, first install with npm.
```
$ npm install --save cryptoapi-lib
```
#### Examples

##### CommonJS

```js
const cryptoapi = require('cryptoapi-lib');
const crypto = new crypto.Crypto('***');
const result = await crypto.api.eth.getNetworkInfo();
```

##### ES Module
```js
import { Crypto } from 'cryptoapi-lib';
const crypto = new Crypto('***');
const result = await crypto.api.eth.getNetworkInfo();
```

### Browser

#### Installation
Or if you're keeping things super simple, just include [this file](dist/bundles/crypto-api.js) as a script like so:
```html
<script src="node_modules/cryptoapi-lib/dist/bundles/crypto-api.js"></script>
<script src="node_modules/cryptoapi-lib/dist/bundles/crypto-api.min.js"></script>
```

#### Examples
```
const crypto = new cryptoapi.Crypto('***')
const result = await crypto.api.eth.getNetworkInfo();
```

## Full API Reference
[API](docs/API.md) - List with all api methods.

## Building
To build the library or its components yourself, clone it from GitHub and install the development dependencies:

```bash
$ git clone https://github.com/cryptoapi-project/cryptoapi-js.git
$ cd cryptoapi-lib
$ npm install
$ npm run build
```

All compiled files will be located in the directory dist.

## License
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
