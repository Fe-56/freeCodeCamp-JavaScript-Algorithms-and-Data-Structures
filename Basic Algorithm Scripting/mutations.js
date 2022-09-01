function mutation(arr) {
  const first = arr[0];
  const second = arr[1];

  for (let i = 0; i < second.length; i++){
    if (!first.toLowerCase().includes(second[i].toLowerCase())){
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "hey"]);