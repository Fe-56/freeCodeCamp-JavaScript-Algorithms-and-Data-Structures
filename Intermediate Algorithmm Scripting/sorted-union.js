function uniteUnique() {
  let output = [];
  let number;
  let array;

  for (let i = 0; i < arguments.length; i++){
    array = arguments[i];

    for (let j = 0; j < array.length; j++){
      number = array[j];

      if (!output.includes(number)){
        output.push(number);
      }
    }
  }
  
  return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);