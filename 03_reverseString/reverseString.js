const reverseString = function (word) {
  if (!word) {
    return "";
  } else {
    let letterArray = word.split("");
    return letterArray.reverse().join("");
  }
};

// Do not edit below this line
module.exports = reverseString;
