function titleCase(str) {
  const words = str.split(" ");
  var output = "";

  for (let i = 0; i < words.length; i++){
    var word = words[i];
    var temp = "";
    temp += word[0].toUpperCase();
    var last = word.slice(1, );
    temp += last.toLowerCase();
    output += temp + " ";
  }

  return output.slice(0, output.length - 1);
}

console.log(titleCase("I'm a little tea pot"));