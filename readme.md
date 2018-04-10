# WAT

[![Greenkeeper badge](https://badges.greenkeeper.io/syzer/whatsMyIp.svg)](https://greenkeeper.io/)
Prints qr codes and ip adresses of your machine and server

# Usage

## cli
```bash
./whatsMyIp
# will print qrcodes and ips
```

## es2017
```js
import whatsMyIp from './whatsMyIp'
whatsMyIp()
// will console.log qrcodes and ips
```

## with old modules
```js
const whatsMyIps = require('./whatsMyIp.compiled').default
whatsMyIps()
```

or with port 
```js
const whatsMyIp = require('./whatsMyIp.compiled').default
whatsMyIp(3008) 
```
