const repeatString = function(str, num) {
  if (num < 0) return "ERROR";

  let newString = "";
  for (i=0; i < num; i++) newString += str;
  return newString;
};

module.exports = repeatString;
