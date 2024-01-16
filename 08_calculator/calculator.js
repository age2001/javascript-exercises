const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  // let total = 0;
	// for (num of arr) total += num;
  // return total;

  return arr.reduce((sum, currentArrValue) => (sum + currentArrValue), 0);
};

const multiply = function(arr) {
  // total = 1;
  // for (let i = 0 ; i < arr.length; i++) {
  //   total *= arr[i];
  // }
  // return total;
  
  return arr.reduce((total, curretnArrValue) => (total *= curretnArrValue));
};

const power = function(n, p) {
	return n ** p;
};

const factorial = function(n) {
  if (n == 0) return 1;

  let total = n;
  let decreasingN = n;
  while (decreasingN - 1 > 0) {
    decreasingN--;
    total *= decreasingN;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
