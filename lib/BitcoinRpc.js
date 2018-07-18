const _ = require('lodash');
const request = require('request-promise-native');

class BitcoinRpc {
  constructor(url) {
    this.url = url;
    this.id = 1;
  }
  
  async call() {
    let method = arguments[0];
    let params = [...arguments].splice(1);
    try {
      let response = await request({
        method: 'POST',
        url: this.url,
        json: true,
        body: {
          id: this.id++,
          method: method,
          params: params
        }
      });
      return response.result;
    } catch (e) {
      throw new Error(e.error.message)
    }
  }
}

const methods = [
  'abandonTransaction',
  'abortRescan',
  'addMultiSigAddress',
  'addNode',
  'addWitnessAddress',
  'backupWallet',
  'bumpFee',
  'clearBanned',
  'combineRawTransaction',
  'createMultiSig',
  'createRawTransaction',
  'createWitnessAddress',
  'decodeRawTransaction',
  'decodeScript',
  'disconnectNode',
  'dumpPrivKey',
  'dumpWallet',
  'encryptWallet',
  'estimateFee',
  'estimatePriority',
  'estimateSmartFee',
  'estimateSmartPriority',
  'fundRawTransaction',
  'generate',
  'generateToAddress',
  'getAccount',
  'getAccountAddress',
  'getAddedNodeInfo',
  'getAddressesByAccount',
  'getBalance',
  'getBestBlockHash',
  'getBlock',
  'getBlockCount',
  'getBlockHash',
  'getBlockHeader',
  'getBlockTemplate',
  'getBlockchainInfo',
  'getChainTips',
  'getChainTxStats',
  'getConnectionCount',
  'getDifficulty',
  'getGenerate',
  'getHashesPerSec',
  'getInfo',
  'getMemoryInfo',
  'getMempoolAncestors',
  'getMempoolDescendants',
  'getMempoolEntry',
  'getMempoolInfo',
  'getMiningInfo',
  'getNetTotals',
  'getNetworkHashPs',
  'getNetworkInfo',
  'getNewAddress',
  'getPeerInfo',
  'getRawChangeAddress',
  'getRawMempool',
  'getRawTransaction',
  'getReceivedByAccount',
  'getReceivedByAddress',
  'getTransaction',
  'getTxOut',
  'getTxOutProof',
  'getTxOutSetInfo',
  'getUnconfirmedBalance',
  'getWalletInfo',
  'getWork',
  'help',
  'importAddress',
  'importMulti',
  'importPrivKey',
  'importPrunedFunds',
  'importPubKey',
  'importWallet',
  'keypoolRefill',
  'listAccounts',
  'listAddressGroupings',
  'listBanned',
  'listLockUnspent',
  'listReceivedByAccount',
  'listReceivedByAddress',
  'listSinceBlock',
  'listTransactions',
  'listUnspent',
  'listWallets',
  'lockUnspent',
  'move',
  'ping',
  'preciousBlock',
  'prioritiseTransaction',
  'pruneBlockchain',
  'removePrunedFunds',
  'sendFrom',
  'sendMany',
  'sendRawTransaction',
  'sendToAddress',
  'setAccount',
  'setBan',
  'setGenerate',
  'setNetworkActive',
  'setTxFee',
  'signMessage',
  'signMessageWithPrivKey',
  'signRawTransaction',
  'stop',
  'submitBlock',
  'upTime',
  'validateAddress',
  'verifyChain',
  'verifyMessage',
  'verifyTxOutProof',
  'walletLock',
  'walletPassphrase',
  'walletPassphraseChange',
  'version'
]

for (let method of methods) {
  BitcoinRpc.prototype[method] = _.partial(BitcoinRpc.prototype.call, method.toLowerCase());
}

module.exports = BitcoinRpc;
