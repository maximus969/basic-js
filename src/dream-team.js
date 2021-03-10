const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  return members
    .filter((element) => typeof element === "string")
    .map((str) => str.trim().charAt(0).toUpperCase())
    .sort()
    .join("");
};
