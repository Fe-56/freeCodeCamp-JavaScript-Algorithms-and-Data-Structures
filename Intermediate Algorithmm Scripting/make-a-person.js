const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];
  let fullName = firstAndLast;

  this.getFullName = function() {
    return firstName + " " + lastName;
  };

  this.getFirstName = () => firstName;

  this.getLastName = () => lastName;

  this.setFullName = (firstAndLast) => {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
    fullName = firstAndLast;
  };

  this.setFirstName = (first) => firstName = first;

  this.setLastName = (last) => lastName = last;
}

const bob = new Person('Bob Ross');
bob.getFullName();