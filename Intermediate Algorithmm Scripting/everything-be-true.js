function truthCheck(collection, pre) {
  let object;
  let value;

  for (let i = 0; i < collection.length; i++){
    object = collection[i];
    value = object[pre];

    if (!value){
      return false;
    }
  }

  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");