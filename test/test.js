const BitcoinRpc = require('../');

let rpc = new BitcoinRpc('http://user:password@localhost:8332');

describe('bitcoin rpc', () => {
  it('should call succesfully', (done) => {
    rpc.call('getblockhash', 0).then(result => done());
  });
  it('should call wrapper method succesfully', (done) => {
    rpc.getBlockHash(0).then(result => done());
  });
  it('should call lower case wrapper method succesfully', (done) => {
    rpc.getblockhash(0).then(result => done());
  });
  it('should throw error for invalid command', (done) => {
    rpc.call('invalid_command').catch(error => done());
  });
});
