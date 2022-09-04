function destroyer() {
  var array = arguments[0].slice(0);

  for (let i = 1; i <= arguments.length; i++){
    let toRemove = arguments[i];
    array = array.filter((item) => {
      return item != toRemove;
    })
  }

  return array
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);