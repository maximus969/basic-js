const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let hanoi = {};
  let turns;

  for (let i = 0; i <= disksNumber; i++) {
    turns = 2 ** i;
  }
  turns = turns - 1;

  let turnsPerSecond = (turnsSpeed / 60) / 60;
  let seconds = Math.floor(turns / turnsPerSecond);

  hanoi['turns'] = turns;
  hanoi['seconds'] = seconds;
  return hanoi;
};
