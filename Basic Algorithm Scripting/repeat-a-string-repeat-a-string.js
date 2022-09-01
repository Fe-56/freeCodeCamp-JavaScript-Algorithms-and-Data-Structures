function repeatStringNumTimes(str, num) {
  if (num <= 0){
    return "";
  }

  else{
    var output = "";

    for (let i = 0; i < num; i++){
      output += str;
    }
  }

  return output;
}

repeatStringNumTimes("abc", 3);