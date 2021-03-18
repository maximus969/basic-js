const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error();

  let result = [];
  let controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  for (let i = 0; i < arr.length; i++) {
    if (!controls.includes(arr[i])) {
      result.push(arr[i]);
    } else if (arr[i] === "--double-next" && i < arr.length - 1) {
      result.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev" && i > 0 && arr[i - 2] !== "--discard-next") {
      result.push(arr[i - 1]);
    } else if (arr[i] === "--discard-prev" && arr[i - 2] !== "--discard-next") {
      result.pop();
    } else if (arr[i] === "--discard-next") {
      i++;
    }
  }
  return result;
};
