const repeatString = function (string, number) {
  let result = "";
  if (number > -1) {
    for (i = 0; i < number; i++) {
      result += string;
    }
    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
