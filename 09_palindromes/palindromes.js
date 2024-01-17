const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (str.split("").reverse().join("") == str) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
