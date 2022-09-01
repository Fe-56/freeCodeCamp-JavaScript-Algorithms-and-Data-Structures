function findLongestWordLength(str) {
  var longestLength = 0;
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++){
    var word = words[i];
    var length = word.length;

    if (length > longestLength){
      longestLength = length;
    }
  }

  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))