const reverseString = function (originalString) {
  let stringArray = Array.from(originalString);
  let stringArrayreversed = stringArray.reverse();
  let reversedString = stringArrayreversed.join("");
  return reversedString;
};

reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
