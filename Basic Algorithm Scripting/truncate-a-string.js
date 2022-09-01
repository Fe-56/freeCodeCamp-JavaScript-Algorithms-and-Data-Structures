function truncateString(str, num) {
  var output = "";

  for (let i = 0; i < str.length; i++){
    if (i + 1 <= num){
      output += str[i];
    }
  }

  if (str.length > num){
    output += "...";
  }

  return output;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);