let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
function glideMixin(object){
  object.glide = function(){
    console.log("Gliding")
  }
}

glideMixin(bird);
glideMixin(boat)