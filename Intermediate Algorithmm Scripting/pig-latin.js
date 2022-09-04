function translatePigLatin(str) {
  var output;

  if (isVowel(str[0])){
    output = str + "way";
  }

  else{
    let consonantCluster = str[0];
    let i = 1;

    while (i < str.length){
      let character = str[i];

      if (isVowel(character)){
        break;
      }

      else{
        consonantCluster += character;
        i += 1;
      }
    }

    output = str.slice(consonantCluster.length) + consonantCluster + "ay";
  }

  console.log(output);
  return output;
}

function isVowel(character){
  let test = character.toLowerCase();

  if (test === "a" || test === "e" || test === "i" || test === "o" || test === "u"){
    return true;
  }

  return false;
}

translatePigLatin("consonant");
// translatePigLatin("rhythm");