const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  var output = 0;

  for (let user in usersObj){
    if (usersObj[user].online){
      output += 1;
    }
  }

  return output;
  // Only change code above this line
}

console.log(countOnline(users));