const repeatString = function(str, times) {
  if (times < 0) return "ERROR";

  let newString = "";
  for (let i=0; i < times; i++) newString += str;
  return newString;
};

module.exports = repeatString;
