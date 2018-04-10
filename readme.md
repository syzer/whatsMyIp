# WAT
Prints qr codes and ip addresses of your machine and server

[![asciicast](https://asciinema.org/a/EAi2R38j57mTwFxdWuv2WiRmv.png)](https://asciinema.org/a/EAi2R38j57mTwFxdWuv2WiRmv)

# Usage

## cli
```bash
npm i -g whatsmyip
whatsMyIp
# will print qr-codes and ips
```

## es2017
```js
import whatsMyIp from './whatsMyIp'
whatsMyIp()
// will console.log qr-codes and ips
```

## with old modules
```js
const whatsMyIps = require('./whatsMyIp.compiled').default
whatsMyIps()
```

## or with port 
```js
const whatsMyIp = require('./whatsMyIp.compiled').default
whatsMyIp(3008) 
```
