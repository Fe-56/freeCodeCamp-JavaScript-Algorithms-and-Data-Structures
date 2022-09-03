// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++){
    let newValue = callback(this[i]);
    newArray.push(newValue);
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});