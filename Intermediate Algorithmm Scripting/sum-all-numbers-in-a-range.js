function sumAll(arr) {
  let num1 = arr[0];
  let num2 = arr[1];
  var smaller;
  var bigger;

  if (num1 < num2){
    smaller = num1;
    bigger = num2;
  }

  else{
    smaller = num2;
    bigger = num1;
  }

  var output = 0;

  for (let i = smaller; i <= bigger; i++){
    output += i
  }

  return output;
}

sumAll([1, 4]);