## bitcoin-rpc-promise

A modern promise based node.js library for communicating with Bitcoin daemon.



[![Dependency Status](https://img.shields.io/david/bitcoin-rpc-promise/bitcoin-rpc-promise.svg?style=flat-square)](https://david-dm.org/bitcoin-rpc-promise/bitcoin-rpc-promise)
[![Known Vulnerabilities](https://snyk.io/test/npm/bitcoin-rpc-promise/badge.svg?style=flat-square)](https://snyk.io/test/npm/bitcoin-rpc-promise)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fhellonikc%2Fbitcoin-rpc-promise.svg?type=shield)]
(https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fhellonikc%2Fbitcoin-rpc-promise?ref=badge_shield)
[![Downloads][downloads-image]][downloads-url]



## Install

```
npm install --save bitcoin-rpc-promise
```

## Usage

Start bitcoin daemon with rpc support:

```bash
./bitcoind --server=1 --rpcuser=user --rpcpassword=password
```

Connect to daemon endpoint and send rpc commands:

```js
const BitcoinRpc = require('bitcoin-rpc-promise');

let btc = new BitcoinRpc('http://user:password@localhost:8332');

// call named wrappers
btc.getBlockHash(0).then(result => {
  console.log(result);
});

// or call raw commands
btc.call('getblockhash', [100]).then(result => {
  console.log(result);
});
```

## Documentation

[Bitcoin Wiki](https://en.bitcoin.it/wiki/API_reference_%28JSON-RPC%29)
