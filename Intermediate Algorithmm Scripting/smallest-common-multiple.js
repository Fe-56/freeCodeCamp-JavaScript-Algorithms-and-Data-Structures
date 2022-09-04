function smallestCommons(arr) {
  let smaller;
  let larger;

  if (arr[0] > arr[1]){
    larger = arr[0];
    smaller = arr[1];
  }

  else{
    larger = arr[1];
    smaller = arr[0];
  }

  let candidate = 0;
  let trigger = true;

  while (trigger){
    candidate += larger;
    let can = true;

    if ((candidate % larger == 0) && (candidate % smaller == 0)){
      for (let i = smaller + 1; i < larger; i++){
        if (candidate % i != 0){
          can = false;
          break;
        }
      }

      if (can){
              trigger = false;
      }
    }
  }

  return candidate;
}

smallestCommons([1,5]);