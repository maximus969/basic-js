const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  } else if (isNaN(date.getTime())) {
    throw  'Error'
  } else if (date.getMonth() < 2 || date.getMonth() === 11) {
    return "winter";
  } else if (date.getMonth() < 5) {
    return "spring";
  } else if (date.getMonth() < 8) {
    return "summer";
  } else {
    return "autumn";
  }
};
