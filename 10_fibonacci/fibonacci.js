const fibonacci = function(num) {
  num = parseInt(num);
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

module.exports = fibonacci;
