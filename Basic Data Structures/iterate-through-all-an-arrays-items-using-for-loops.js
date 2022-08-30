function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++){
    var innerArr = arr[i];
    var temp = [];
    var criteriaMet = false;

    for (let j = 0; j < innerArr.length; j++){
      var num = innerArr[j];

      if (num === elem){
        criteriaMet = true;
        break;
      }

      else{
        temp.push(num)
      }
    }

    if (!criteriaMet){
      newArr.push(temp);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));