const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let outpt = 1;
    for (let j = 0; j < arr.length; j++) {
    let x = 1;
        if (Array.isArray(arr[j])) {
            x = x + this.calculateDepth(arr[j]);
        }
       if(x >= outpt) {
        outpt = x;
        }
    }
    return outpt;
  }
};