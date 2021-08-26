const reverseString = function(str) {
  let splitString = str.split('');
  return splitString.reverse().join('');
};

module.exports = reverseString;
