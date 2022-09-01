function confirmEnding(str, target) {
  const strReversed = [];
  const targetReversed = [];

  for (let i = str.length - 1; i >= 0; i--){
    strReversed.push(str[i]);
  }

  for (let i = target.length - 1; i >= 0; i--){
    targetReversed.push(target[i]);
  }

  var shorter;

  if (strReversed.length < targetReversed.length){
    shorter = strReversed;
  }

  else{
    shorter = targetReversed;
  }

  for (let i = 0; i < shorter.length; i++){
    if (strReversed[i] != targetReversed[i]){
      return false;
    }
  }

  return true;
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"));