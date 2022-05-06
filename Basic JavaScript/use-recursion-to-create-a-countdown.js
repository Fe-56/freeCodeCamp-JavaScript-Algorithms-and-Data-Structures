// Only change code below this line
function countdown(n){
  if (n < 1){
    return [];
  }

  else{
    const output = countdown(n - 1);
    output.unshift(n);
    return output
  }
}
// Only change code above this line