const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let savedArr = [];

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--discard-next') {
                if (i === arr.length - 1) {
                    continue;
                }
                savedArr.push(arr[i]);
                i++;
            } else if (arr[i] === '--double-next') {
                if (i === arr.length - 1) {
                    continue;
                }
                savedArr.push(arr[i]);
                savedArr.push(arr[i + 1]);
            } else if (arr[i] === '--discard-prev') {
                if (i === 0) {
                    continue;
                }
                savedArr.splice(savedArr.length - 1, 1);
            } else if (arr[i] === '--double-prev') {
                if (i === 0) {
                    continue;
                }
                savedArr.push(savedArr[savedArr.length - 1]);
            } else {
                savedArr.push(arr[i]);
            }
        }
        let outArr = [];
        for (let j = 0; j < savedArr.length; j++) {
            if (savedArr[j] !== '--double-prev' && savedArr[j] !== '--discard-prev' && savedArr[j] !== '--double-next' && savedArr[j] !== '--discard-next') {
                outArr.push(savedArr[j]);
            }
        }
        return outArr;
    } else if (arr.length === 0 && typeof arr[0] === "undefined") {
        return undefined;
    } else {
        throw new Error();
    }
};