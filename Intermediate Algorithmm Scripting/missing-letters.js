function fearNotLetter(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const first = str[0];
  const firstIndex = alphabets.indexOf(first)
  const diff = firstIndex;

  for (let i = 1; i < str.length; i++){
    let alphabet = alphabets[i + diff];

    if (str[i] != alphabet){
      return alphabet;
    }
  }

  return undefined;
}

fearNotLetter("abce");