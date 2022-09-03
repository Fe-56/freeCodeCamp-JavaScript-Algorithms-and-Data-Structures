function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle){
  if (beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }

  else{
    prototypeProps.push(property);
  }
}