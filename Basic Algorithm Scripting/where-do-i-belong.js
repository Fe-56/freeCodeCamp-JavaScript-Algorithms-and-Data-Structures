function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  var output = -1;

  for (let i = 0; i < arr.length; i++){
    var temp = arr[i];

    if (num > temp){
      continue;
    }

    else{
      output = i;
      break;
    }
  }

  if (output == -1){
    output = arr.length;
  }

  console.log(output);
  return output;
}

getIndexToIns([40, 60], 50);