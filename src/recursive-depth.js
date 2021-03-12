const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) {
      return 0
    }

    return 1 + arr.map(this.calculateDepth.bind(this)).reduce((acc, current) => Math.max(acc, current), 0)
  }
};
