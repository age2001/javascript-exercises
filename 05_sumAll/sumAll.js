const sumAll = function(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        return "ERROR";
    }
    if (number1 < 0 || number2 < 0) {
        return "ERROR";
    }

    let finalSum = 0;
    let largeNumber, smallNumber;
    if (number1 > number2) {largeNumber = number1; smallNumber = number2;}
    else {smallNumber = number1; largeNumber = number2;}

    for (let i = smallNumber; i <= largeNumber; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
