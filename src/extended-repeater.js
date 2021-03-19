const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let arr = [];
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }
    if (options.addition === null) {
        options.addition = 'null';
    }
    if (str === null) {
        str = 'null';
    }
    for (let j = 0; j < options.additionRepeatTimes; j++) {
        arr.push(options.addition);
    }
    arr = arr.join(`${options.additionSeparator}`);
    let arrN = [];
    arrN.push(arr);
    arrN.unshift(str);
    arrN = arrN.join('');
    let arrL = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        arrL.push(arrN);
    }
    arrL = arrL.join(`${options.separator}`)
    return arrL;
};
  