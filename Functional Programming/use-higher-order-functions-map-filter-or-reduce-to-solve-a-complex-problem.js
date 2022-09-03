const squareList = arr => {
  // Only change code below this line
  const positiveIntegers = arr.filter((number) => {
    return Number.isInteger(number) && number > 0
  })
  const output = positiveIntegers.map((number) => {
    return number * number
  })
  return output;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);