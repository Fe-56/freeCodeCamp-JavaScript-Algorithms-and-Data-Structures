function rot13(str) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let netIndex;
  let character;
  let characterIndex;
  let output = "";

  for (let i = 0; i < str.length; i++){
    character = str[i];

    if (!/[A-Z]/.test(character)){
      output += character;
      continue;
    }

    characterIndex = alphabets.indexOf(character);

    if (characterIndex < 13){
      netIndex = characterIndex + 13;
    }

    else{
      netIndex = characterIndex - 13;
    }

    output += alphabets[netIndex];
  }

  return output;
}

rot13("SERR PBQR PNZC");