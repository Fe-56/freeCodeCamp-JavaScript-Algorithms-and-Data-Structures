function spinalCase(str) {
  let temp = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let words = temp.split(/\s+|_+/g);
  return words.join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');