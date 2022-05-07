/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)*/

function getDivisorsCnt(n){
    let arr = []
     for (let i = 1; i <= n; i++){
       if (n % i === 0){
         arr.push(i)
       }
     }
      return arr.length
  }