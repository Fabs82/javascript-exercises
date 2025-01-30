const sumAll = function (startN, endN) {
    let sum = 0;
    if (startN % 1 != 0 || endN % 1 != 0 || startN < 0 || endN < 0
        || Number(startN) !== startN || Number(endN) !== endN) return "ERROR"
    else {
        if (startN < endN) {
            for (let i = startN; i <= endN; i++)
                sum += i;
        }
        else if (startN > endN) {
            for (let i = startN; i >= endN; i--)
                sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;