function checkSign(num) {
  return (num > 0) ? "positive" :
  (num === 0) ? "zero" :
  "negative";
}

checkSign(10);