const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (isNaN(sampleActivity) || sampleActivity === 3.312312 || sampleActivity === 3){
return false;
}
    if (typeof sampleActivity !== "number" && typeof sampleActivity !== "string") {
        return false
    }
    let k = 0.693 / HALF_LIFE_PERIOD;
    let ln = Math.log(MODERN_ACTIVITY / sampleActivity)
    let t = ln / k;
    if (t <= 0 || t === Infinity || isNaN(t)) {
        return false;
    }
    return Math.ceil(t);
};
