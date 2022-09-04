function addTogether() {
  if (arguments.length == 1){
    if (typeof arguments[0] != 'number'){
      return undefined;
    }

    else{
      return (a) => {
        if (typeof a != 'number'){
          return undefined;
        }

        else{
          return arguments[0] + a;
        }
      }
    }
  }

  else{
    if (typeof arguments[0] != 'number' || typeof arguments[1] != 'number'){
      return undefined;
    }

    else{
      return arguments[0] + arguments[1];
    }
  }
}

addTogether(2,3);