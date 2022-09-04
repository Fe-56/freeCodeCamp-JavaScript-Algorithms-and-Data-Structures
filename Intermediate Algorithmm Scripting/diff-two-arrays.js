function diffArray(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++){
    let arr1Item = arr1[i];

    if (!arr2.includes(arr1Item)){
      newArr.push(arr1Item);
    }
  }

  for (let i = 0; i < arr2.length; i++){
    let arr2Item = arr2[i];

    if (!arr1.includes(arr2Item)){
      newArr.push(arr2Item);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);