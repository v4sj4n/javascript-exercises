const removeFromArray = function (userArray, ...values) {
  arrayToReturn = [];
  userArray.forEach((element) => {
    if (values.includes(element) === false) {
      arrayToReturn.push(element);
    }
  });
  return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
