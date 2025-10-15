const sumAll = function(a, b) {
    if (!((Number.isInteger(a) && Number.isInteger(b))) || (a < 0 || b < 0)) return "ERROR";
    let sum = 0;
    let smaller = (a < b) ? a : b;
    for (let i = smaller; i <= ((a + b) - smaller); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
