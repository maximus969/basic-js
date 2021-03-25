const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return {...this, chain: [...this.chain, value !== 'undefined' ? value : '']}
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.chain.length) throw Error
    return {...this, chain: [...this.chain].filter((_, index) => index !== position - 1 )}
},
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return {...this, chain: [...this.chain].reverse()}
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.map(el => `( ${el} )`).join('~~');
  }
};

module.exports = chainMaker;
