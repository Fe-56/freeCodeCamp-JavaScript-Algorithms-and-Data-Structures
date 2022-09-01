function chunkArrayInGroups(arr, size) {
  var output = [];

  for (let i = 0; i < arr.length; i += size){
    output = output.concat([arr.slice(i, i + size)]);
  }

  return output;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);