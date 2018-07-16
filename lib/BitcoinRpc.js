const request = require('request-promise-native');

class BitcoinRpc {
  constructor(url) {
    this.url = url;
    this.id = 1;
  }
  
  async call(method, params = []) {
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

module.exports = BitcoinRpc;
