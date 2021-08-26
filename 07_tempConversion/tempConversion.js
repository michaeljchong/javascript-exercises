const ftoc = function(temp) {
  // c = (f-32) * 5/9
  return Math.round((temp - 32) * 5 / 9 * 10) / 10;
};

const ctof = function(temp) {
  // f = 9/5 * c + 32
  return Math.round(9 / 5 * temp + 32 * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
