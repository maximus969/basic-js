const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // const newStr = str.toString();
  // const newAddition = options[addition].toString();
  if (typeof options['repeatTimes'] === 'undefined') options['repeatTimes'] = 1
  if (typeof options['additionRepeatTimes'] === 'undefined') options['additionRepeatTimes'] = 1;
  if (typeof options['separator'] === 'undefined') options['separator'] = '+';
  if (typeof options['additionSeparator'] === 'undefined') options['additionSeparator'] = '|';

  let newStr; 
  str === null ? newStr = 'null' : newStr = str;
  options['addition'] === null ? options['addition'] = 'null' : options['addition'];

  let array = new Array(options["additionRepeatTimes"]).fill(options["addition"]).join(options["additionSeparator"]);
  let array1 = `${newStr}${array}`;
  let array2 = new Array(options['repeatTimes']).fill(array1).join(options['separator']);
  return array2;
};
  