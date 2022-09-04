function steamrollArray(arr) {
  var output = [];

  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      output = output.concat(steamrollArray(arr[i]))
    }

    else{
      output.push(arr[i]);
    }
  }

  console.log(arr, output)
  return output;
}

steamrollArray([1, [2], [3, [[4]]]]);