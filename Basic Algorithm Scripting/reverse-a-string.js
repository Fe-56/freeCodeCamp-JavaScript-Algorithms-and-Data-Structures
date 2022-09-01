function reverseString(str) {
  let temp = str.split("");
  str = "";

  for (let i = temp.length - 1; i >= 0; i--){
    str += temp[i];
  }

  return str;
}

reverseString("hello");