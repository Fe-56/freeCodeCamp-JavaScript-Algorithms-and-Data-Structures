// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let isActualFirstName = false;
  let isProperty = false;
  let temp = 0;

  for (let i = 0; i < contacts.length; i++){
    if (name == contacts[i].firstName){
      isActualFirstName = true;
      isProperty = contacts[i].hasOwnProperty(prop);
      temp = i;
      break;
    }
  }

  if (isActualFirstName === true && isProperty === true){
    return contacts[temp][prop];
  }

  else if (isActualFirstName === false){
    return "No such contact";
  }

  else if (isActualFirstName === true && isProperty === false){
    return "No such property";
  }


  // Only change code above this line
}

lookUpProfile("Akira", "likes");