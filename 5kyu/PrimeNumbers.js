/*The Problem
You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

isPrime(number)
Should return boolean true if prime, otherwise false

getPrimes(start, finish)
Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.*/

function isPrime(number) {
    if (number < 2){
      return false
    }
    const squareRoot = Math.sqrt(number)
    for (let i = 2; i <= squareRoot; i++){
      if (number % i === 0){
        return false
      } 
    }
    return true
  }
  
  function getPrimes(start, finish) {
    let result = []
    if (start < finish){
      for (let i = start; i <= finish; i++){
        if(isPrime(i)){
          result.push(i)
        }
      }
    } else if (start > finish) {
      for (let i = finish; i <= start; i++){
        if(isPrime(i)){
          result.push(i)
        }
      }
    }
    return result
  
  }
  getPrimes()