const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let sum = 0;
	for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
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
