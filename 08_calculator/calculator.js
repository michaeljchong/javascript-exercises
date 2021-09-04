const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((total, current) => total + current, 0);
};

const multiply = function(nums) {
  return nums.length ? nums.reduce((total, current) => total * current) : 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
