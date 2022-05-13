// Only change code below this line
class Thermostat{
  constructor(temperatureFarenheit){
    this._temperature = temperatureFarenheit;
  }
  get temperature(){
    return 5/9 * (this._temperature - 32);
  }
  set temperature(temperatureCelcius){
    this._temperature = temperatureCelcius * 9.0 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius