/*Given a number N, determine if the sum of N consecutive numbers is odd or even.

If the sum is definitely an odd number, return Odd.
If the sum is definitely an even number, return Even.
If the sum can be either odd or even ( depending on which first number you choose ), return Either.
*/

function oddOrEven(n) {
    console.log(n)
    if (n === 1 || n % 2 > 0 ) {
      return EITHER
    }
    
    const q = n/2
  
    if (q % 2 === 0) {
      return EVEN
    }
    if (q % 2 > 0) {
      return ODD
    }
    
     return EITHER
  }