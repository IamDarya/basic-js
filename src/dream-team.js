// const CustomError = require("../extensions/custom-error");

// module.exports = function createDreamTeam( members ) {
//   throw new CustomError('Not implemented');
//   // remove line with error and write your code here
// };


const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    let newArr = [];
    let ifNoString = 0;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                newArr.push(arr[i].trim().toUpperCase().slice(0, 1));
                newArr.sort();
                ifNoString++;
            }
        }
        if (ifNoString === 0) {
            return false;
        }
    } else {
        return false;
    }
    return newArr.join('');
};