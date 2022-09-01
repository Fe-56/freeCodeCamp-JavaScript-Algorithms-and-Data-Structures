function bouncer(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++){
    var temp = arr[i];

    if ((temp != false) && (temp != null) && (temp != 0) && (temp != "") && (temp != undefined) && (!Number.isNaN(temp))){
      output.push(temp);
    }
  }

  return output
}

bouncer([7, "ate", "", false, 9]);