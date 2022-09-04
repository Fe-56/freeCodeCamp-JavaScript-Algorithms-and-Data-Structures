function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  if (source === undefined){
    return [];
  }

  else{
    const conditions = Object.getOwnPropertyNames(source);

    for (let i = 0; i < collection.length; i++){
      let item = collection[i];
      var toAdd = true;

      for (let j = 0; j < conditions.length; j++){
        let condition = conditions[j];
        
        if (!(item.hasOwnProperty(condition) && item[condition] === source[condition])){
          toAdd = false;
          break;
        }
      }

      if (toAdd){
        arr.push(item);
      }
    }
  }

  return arr;
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });