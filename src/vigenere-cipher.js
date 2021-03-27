const CustomError = require("../extensions/custom-error");

let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class VigenereCipheringMachine {
  constructor(reverse) {
      if (reverse === undefined) {
          this.reverse = true;
      } else {
          this.reverse = reverse;
      }
  }

  encrypt(text, key) {
      if (!text || !key) throw new Error();

      let encText = text.toLowerCase().split('');
      let encKey = key.toLowerCase().split('');
      let result = [];

      for (let i = 0; i < encText.length; i++) {
          if (chars.includes(encText[i])) {
              if (encKey.length < encText.length) encKey.push(encKey[i]);
            
              let indexNewChar = 0;
              let sumIndex = chars.indexOf(encText[i]) + chars.indexOf(encKey[i]);

              if (sumIndex >= 26) {
                  indexNewChar = sumIndex - 26;
              } else {
                  indexNewChar = sumIndex;
              }
              result.push(chars[indexNewChar]);
          } else {
              result.push(encText[i]);
              encKey.splice(i, 0, ' ');
          }
      }

      if (!this.reverse) result = result.reverse();

      return result.join('').toUpperCase();
  }

  decrypt(text, key) {
      if (!text || !key) throw new Error();

      let decText = text.toLowerCase().split('');
      let decKey = key.toLowerCase().split('');
      let result = [];

      for (var i = 0; i < decText.length; i++) {
          if (chars.includes(decText[i])) {
              if (decKey.length < decText.length) decKey.push(decKey[i]);
            
              let indexNewChar = 0;
              let diffIndex = chars.indexOf(decText[i]) - chars.indexOf(decKey[i]);

              if (diffIndex < 0) {
                  indexNewChar = diffIndex + 26;
              } else {
                  indexNewChar = diffIndex;
              }
              result.push(chars[indexNewChar]);
          } else {
              result.push(decText[i]);
              decKey.splice(i, 0, ' ');
          }
      }

      if (!this.reverse) result = result.reverse();

      return result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
