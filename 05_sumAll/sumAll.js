const sumAll = function(num1, num2) {
  if (typeof(num1) !== "number" || typeof(num2) !== "number" ||
      num1 < 0 || num2 < 0) return "ERROR";

  let sum = 0;
  let startNumber = (num1 <= num2) ? num1 : num2;
  let endNumber = (startNumber === num1) ? num2 : num1; 
  
  while (startNumber <= endNumber) {
    sum += startNumber;
    startNumber++;
  }

  return sum;
};

module.exports = sumAll;
