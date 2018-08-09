## bitcoin-rpc-promise

A modern promise based node.js library for communicating with Bitcoin daemon.

[![npm package](https://nodei.co/npm/bitcoin-rpc-promise.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bitcoin-rpc-promise/)

[![NPM version][npm-image]][npm-url]
[![Dependency Status](https://img.shields.io/david/hellonikc/bitcoin-rpc-promise.svg?style=flat-square)](https://david-dm.org/hellonikc/bitcoin-rpc-promise)
[![Known Vulnerabilities](https://snyk.io/test/npm/bitcoin-rpc-promise/badge.svg?style=flat-square)](https://snyk.io/test/npm/bitcoin-rpc-promise)
[![Downloads][downloads-image]][downloads-url]
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhellonikc%2Fbitcoin-rpc-promise.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fhellonikc%2Fbitcoin-rpc-promise?ref=badge_shield)

[downloads-image]: https://img.shields.io/npm/dm/bitcoin-rpc-promise.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/bitcoin-rpc-promise
[npm-image]: https://img.shields.io/npm/v/bitcoin-rpc-promise.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/bitcoin-rpc-promise

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
btc.getBlockHash(100).then(result => {
  console.log(result);
});

// or call named wrappers with all lower case
btc.getblockhash(100).then(result => {
  console.log(result);
});

// or call raw commands
btc.call('getblockhash', 100).then(result => {
  console.log(result);
});
```

## Documentation

[Bitcoin Wiki](https://en.bitcoin.it/wiki/API_reference_%28JSON-RPC%29)
