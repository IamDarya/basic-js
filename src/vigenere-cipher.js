const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine{
    constructor(trueOrFalse) {
        this.trueOrFalse = trueOrFalse;
        this.encryptedText = '';
  this.table = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  };

    }
    encrypt(message, key) {
    message = message.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    this.encryptedText = "";
    var specialCharacterCount = 0;

    for( var i = 0; i < message.length; i++ ){
      var keyLetter = (i - specialCharacterCount) % key.length;
      var keyIndex = this.table.a.indexOf(key[keyLetter]);

      if( this.table[message[i]] ){
        this.encryptedText += this.table[message[i]][keyIndex];
      }else{
        this.encryptedText += message[i];
        specialCharacterCount++;
      }
    }

        if (this.trueOrFalse === true || this.trueOrFalse === undefined) {
            return this.encryptedText.toUpperCase();
        } else {
        	this.encryptedText = this.encryptedText.split("").reverse();
            return this.encryptedText.join("").toUpperCase();
        }

    }

    decrypt(message, key) {
    message = message.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    this.decryptedText = "";
    var specialCharacterCount = 0;

    for( var i = 0; i < message.length; i++ ){
      var keyLetter = (i - specialCharacterCount) % key.length;
      var keyRow = this.table[key[keyLetter]];

      if( keyRow.indexOf(message[i]) !== -1 ){
        this.decryptedText += this.table.a[keyRow.indexOf(message[i])];
      }else{
        this.decryptedText += message[i];
        specialCharacterCount++;
      }
    }
        if (this.trueOrFalse === true || this.trueOrFalse === undefined) {
            return this.decryptedText.toUpperCase();
        } else {
        	this.decryptedText = this.decryptedText.split("").reverse();
            return this.decryptedText.join("").toUpperCase();
        }

    }
}

module.exports = VigenereCipheringMachine;

