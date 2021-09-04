const palindromes = function (phrase) {
  alpha = /[a-z]/i;
  let lowerAlpha = phrase.toLowerCase()
                    .split('')
                    .filter(char => alpha.test(char));
  return lowerAlpha.join('') === lowerAlpha.reverse().join('');
};

module.exports = palindromes;
