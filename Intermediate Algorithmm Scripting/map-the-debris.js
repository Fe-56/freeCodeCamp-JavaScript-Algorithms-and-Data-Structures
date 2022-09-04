function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let output = [];
  let period;

  for (let i = 0; i < arr.length; i++){
    period = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3)/GM);
    output.push({name: arr[i].name, orbitalPeriod: Math.round(period)})
  }

  return output;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);