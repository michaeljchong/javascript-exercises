const repeatString = function(str, num) {
  let newString = "";
  for (i=0; i < num; i++) newString += str;
  return newString;
};

module.exports = repeatString;
