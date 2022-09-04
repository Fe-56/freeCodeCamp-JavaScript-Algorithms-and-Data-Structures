function dropElements(arr, func) {
  let item;
  const output = arr.slice(0);

  for (let i = 0; i < arr.length; i++){
    item = arr[i];

    if (func(item)){
      return output;
    }

    else{
      output.splice(output.indexOf(item), 1);
    }
  }

  return output;
}

dropElements([1, 2, 3], function(n) {return n < 3; });