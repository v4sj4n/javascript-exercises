const repeatString = function (phrase, repetition) {
  if (repetition <= -1) {
    return "ERROR";
  } else {
    return phrase.repeat(repetition);
  }
};

// Do not edit below this line
module.exports = repeatString;
