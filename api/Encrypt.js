const crypto = require("crypto");

module.exports = class Encrypt {
  static encrypt(password) {
    return (
      crypto
        .createHmac("sha256", "Attack of the Clones") //  andra parametern saltar lösenordet - kan vara vad som helst
        .update(password)
        .digest("hex")
    );
  }
};