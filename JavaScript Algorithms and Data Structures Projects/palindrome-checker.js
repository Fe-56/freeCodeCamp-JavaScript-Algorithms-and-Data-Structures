function palindrome(str) {
  let strLowerCase = str.toLowerCase();
  let editedStr = strLowerCase.replace(/[^0-9a-z]/gi, ''); 
  let characters = editedStr.split("");
  let charactersReversed = characters.slice(0).reverse();
  let result = true;

  for (let i = 0; i < characters.length; i++){
    if (characters[i] != charactersReversed[i]){
      result = false;
    }
  }

  return result;
}

palindrome("eye");