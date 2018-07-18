## bitcoin-rpc-promise

[Source Code](https://github.com/onetomonejerry/bitcoin-rpc-promise.git)

A modern promise based node.js library for communicating with Bitcoin daemon.

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
