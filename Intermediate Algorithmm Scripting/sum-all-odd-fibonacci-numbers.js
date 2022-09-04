function sumFibs(num) {
  const fibonacci = [1, 1];
  let i = 0, j = 1;

  while (fibonacci[j] <= num){
    let next = fibonacci[i] + fibonacci[j];

    if (next <= num){
      fibonacci.push(fibonacci[i] + fibonacci[j]);
    }

    i += 1;
    j += 1;
  }

  const oddNums = fibonacci.filter((num) => {
    return num % 2 != 0;
  })
  
  const sum = oddNums.reduce((partial, num) => partial + num, 0);
  return sum;
}

sumFibs(4);