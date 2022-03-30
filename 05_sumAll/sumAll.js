const sumAll = function (number1, number2) {
  let sum = 0;

  if (number1 < 0 || number2 < 0) return "ERROR";
  if (Math.sign(number1) <= 0 || Math.sign(number2) <= 0) return "ERROR";
  if (number1 > number2) {
    [number1, number2] = [number2, number1];
  }
  //   if (isNaN(number1) || isNaN(number2)) return "ERROR";  +++ Funktioniert nicht - sollte aber

  if (!Number.isInteger(number1) || !Number.isInteger(number2)) return "ERROR"; // von solutions geborgt

  for (let i = number1; i <= number2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
