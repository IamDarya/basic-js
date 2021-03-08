// const CustomError = require("../extensions/custom-error");

// module.exports = function countCats( matrix ) {
//   throw new CustomError('Not implemented');
//   // remove line with error and write your code here
// };
const CustomError = require("../extensions/custom-error");

module.exports = function countCats( /* matrix */ array) {
    let flatArr = array.flat();
    let calc = 0;
    for (let i = 0; i < flatArr.length; i++) {
        if (flatArr[i] === '^^') {
            calc++;
        }
    }

    return calc;
};
