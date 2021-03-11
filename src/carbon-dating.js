const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string' || Number.isNaN(parseInt(sampleActivity))) {
    return false
  } else if (parseInt(sampleActivity) <= 0 || parseInt(sampleActivity) >= 15) {
    return false
  } else { 
  let age;
  age = (HALF_LIFE_PERIOD / 0.693) * Math.abs(Math.log(sampleActivity / MODERN_ACTIVITY));
  return Math.ceil(age);
  }
};
