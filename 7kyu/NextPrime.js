/*Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.*/

function nextPrime(n){

    const prime = (x) => {
      if (x < 2) {
        return false
      }
      const squareRoot = Math.sqrt(x)
      for (let i = 2; i <= squareRoot; i++){
        if(x % i === 0){
          return false
        }
      }
      return true
    }
    
    let num = n+1
    while(!prime(num)){
       ++num
    }
    return num
  
  }
  nextPrime()