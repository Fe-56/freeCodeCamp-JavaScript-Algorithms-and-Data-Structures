const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const output = arr.slice(0);
  return output.sort((a, b) => {
    return a - b
  })

  // Only change code above this line
}

nonMutatingSort(globalArray);