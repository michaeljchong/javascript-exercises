const removeFromArray = function(arr, ...args) {
  for (i=0; i < args.length; i++) {
    while (arr.includes(args[i])) {
      arr.splice(arr.indexOf(args[i]),1)
    }
  }
  return arr;
};

module.exports = removeFromArray;
