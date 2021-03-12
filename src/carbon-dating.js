const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== "number") {

        return false
    }
    let k = 0.693 / HALF_LIFE_PERIOD;
    let ln = Math.log(MODERN_ACTIVITY / sampleActivity)
    let t = ln / k;
    if (t <= 0 || t === Infinity || t > 11000) {
        return false;
    }
    return Math.ceil(t);
};
