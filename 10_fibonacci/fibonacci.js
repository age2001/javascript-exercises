const fibonacci = function(n, n0 = 1, n1 = 1, count = 2) {
    n = parseInt(n);
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (count === n) {return n1;}
    return fibonacci(n, n1, n0+n1, ++count);
};

// Do not edit below this line
module.exports = fibonacci;
