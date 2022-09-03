function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort((a, b) => {
    if (a < b){
      return -1
    }

    else if (a > b){
      return 1
    }

    else{
      return 0
    }
  })
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);