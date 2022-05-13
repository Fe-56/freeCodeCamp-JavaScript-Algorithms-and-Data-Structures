const sum = (...args) => {
  let output = 0;

  for (let i = 0; i < args.length; i ++){
    output += args[i];
  }

  return output;
}

console.log(sum(1, 2));