function largestOfFour(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++){
    var subArr = arr[i];
    var largestNum = -99999999;

    for (let j = 0; j < subArr.length; j++){
      var num = subArr[j];

      if (num > largestNum){
        largestNum = num;
      }
    }

    output.push(largestNum);
  }
  return output;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);