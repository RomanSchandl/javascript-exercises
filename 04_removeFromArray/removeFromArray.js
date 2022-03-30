const removeFromArray = function (...args) {
  // 1st TRY with an for each loop
  //   array.forEach((element) => {
  //     if (element == arg) {
  //       array[element].pop();
  //     }
  //   });
  //   return array;

  let array = args[0];
  let newArray = [];

  array.forEach((element) => {
    if (!args.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
