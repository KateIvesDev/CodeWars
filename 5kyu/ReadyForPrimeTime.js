/*We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.*/


function prime(num) {
    let result = []
    
    const isPrime = (x) => {
      if (x < 2){
        return false
      }
      const squareRoot = Math.sqrt(x)
      for (let i = 2; i <= squareRoot; i++){
        if (x % i === 0){
          return false
        }
      }
      return true
    }
    
    for (let i = 2; i <= num; i++){
      if(isPrime(i)){
        result.push(i)
      }
    }
    return result
  }

  prime()