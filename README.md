# Crypto API Client

### Folder structure
    ├── build                              # Compiled files.
    ├── docs                               # Documentation files.
    ├── src                                # Source files.
    │   ├── constants                      # All library constants.
    │   ├── dtos                           # Objects which carry data between processes.
    │   ├── errors                         # Base and inheritance errors.
    │   ├── interfaces                     # Intefaces folder.
    │   ├── configuration                  # Dependencies injection configuration.
    │   │   ├── di.container.ts  
    │   ├── crypto                         # All library constants.
    │   │   ├── crypto.ts                  # Crypto client.
    │   │   ├── crypto.factory.ts          # Crypto client factory.   
    │   ├── clients                        # Clients for fork with api and socket.
    │   │   ├── eth.apis                   #  
    │   │   │   ├── eth.sub.apis           # Folder includes sub eth apis.
    │   │   │   ├── eth.api.client.ts      # EthApiClient injects all sub eth apis.
    │   │   ├── eth.events                 # 
    │   │   │   ├── eth.events.client.ts   # EthEventsClient work with websocket service.
    │   │   ├── api.client.ts              # Client for work with all api request. 
    │   │   ├── events.client.ts           # Client for work with all websocket request.        
    │   ├── index.ts                       # Exporting crypto library client.
    ├── LICENSE
    └── README.md


### Example
```
import { Crypto } from 'cryptoapi';

const crypto = new Crypto('sdasda');

const result = await crypto.api.eth.getNetworkInfo();

crypto.events.eth.subscribeBlock(123, 1);

crypto.api.eth.getNetworkInfo();
crypto.api.eth.subscribeToken();

crypto.events.eth.subscribeBlock(12, 10);
crypto.events.eth.unsubscribeBlock(12, 9);

crypto.events.eth.onMessageBlock((data) => console.log('data clinet', data));

crypto.events.eth.close();
    
```
