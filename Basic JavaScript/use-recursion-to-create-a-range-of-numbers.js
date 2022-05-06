function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum){
    return [startNum];
  }

  else{
    const output = rangeOfNumbers(startNum + 1, endNum);
    output.unshift(startNum);
    return output;
  }
};

console.log(rangeOfNumbers(6, 9));