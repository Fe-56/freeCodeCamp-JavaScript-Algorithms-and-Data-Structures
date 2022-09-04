function sumPrimes(num) {
  const primes = [];

  for (let i = 2; i <= num; i++){
    if (isPrime(i)){
      primes.push(i);
    }
  }
  
  console.log(num, primes)
  console.log(primes.reduce((sum, num) => sum + num, 0))
  return primes.reduce((sum, num) => sum + num, 0);
}

function isPrime(num){
  if (num <= 1){
    return false;
  }

  else if (num === 2){
    return true;
  }

  else{
    for (let i = 2; i < num; i++){
      if (num % i === 0){
        return false;
      }
    }

    return true;
  }
}

sumPrimes(10);