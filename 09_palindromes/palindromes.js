const palindromes = function (phrase) {
  alpha = /[a-z]/i;
  const lowerAlpha = phrase
                    .split('')
                    .filter(char => alpha.test(char))
                    .map(char => char.toLowerCase());
  
  let firstHalf = lowerAlpha.slice(0, lowerAlpha.length / 2);
  let secondHalf = lowerAlpha.slice(lowerAlpha.length / 2);
  if (lowerAlpha.length % 2 === 1) {
    firstHalf = lowerAlpha.slice(0, lowerAlpha.length / 2);
    secondHalf = lowerAlpha.slice(lowerAlpha.length / 2 + 1);
  }
  
  return firstHalf.join('') === secondHalf.reverse().join('');
};

module.exports = palindromes;

/*
remove non alphabetical characters and whitespace
change all characters to lowercase
if length is even, split in half
if length is odd, split leaving the middle character
reverse second half
compare first and second halves
*/