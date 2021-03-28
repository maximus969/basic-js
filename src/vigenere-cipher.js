const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.reverse = direct === undefined ? false : !direct;
  }

  encode(textLetter, secretLetter, encrypt) {
    const resultCode =
      ([textLetter, secretLetter]
        .map((letter) => letter.charCodeAt() - 65)
        .reduce((a, b) => (encrypt ? a + b : a - b + 26)) %
        26) +
      65;
    return String.fromCharCode(resultCode);
  }

  getResult(text, secret, encrypt) {
    if (text === undefined || secret === undefined) throw Error;

    const secretLen = secret.length;

    let result = text
      .toUpperCase()
      .split("")
      .reduce(
        ({ str, index }, current) => {
          if (current.match(/[A-Z]/) === null) {
            return { str: str + current, index };
          } else {
            const letterEncoded = this.encode(
              current,
              secret.toUpperCase()[index % secretLen],
              encrypt
            );
            return { str: str + letterEncoded, index: index + 1 };
          }
        },
        { str: "", index: 0 }
      ).str;
    if (this.reverse) {
      result = result.split("").reverse().join("");
    }
    return result;
  }

  encrypt(text, secret) {
    return this.getResult(text, secret, true);
  }
  decrypt(text, secret) {
    return this.getResult(text, secret, false);
  }
}

module.exports = VigenereCipheringMachine;
