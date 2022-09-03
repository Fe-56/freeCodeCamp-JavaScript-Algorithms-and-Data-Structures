function sentensify(str) {
  // Only change code below this line
  const strArray = str.split(/\W/);
  return strArray.join(" ");
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");