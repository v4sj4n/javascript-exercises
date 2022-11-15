const sumAll = function (starting, ending) {
  if (!Number.isFinite(starting) || !Number.isFinite(ending)) {
    return "ERROR";
  } else if (starting < 0 || ending < 0) {
    return "ERROR";
  } else {
    if (starting > ending) {
      return ((starting / ending) * (starting + ending)) / 2;
    } else {
      return ((ending / starting) * (starting + ending)) / 2;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
