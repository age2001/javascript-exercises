const reverseString = function(string) {
    let reversedString = "";
    for (letter of string) {
        reversedString = letter + reversedString;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
