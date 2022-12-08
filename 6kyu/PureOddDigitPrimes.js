function onlyOddDigPrimes(n) {

    let result = []
    
    const odd = (x) => x % 2 > 0
     
    const prime = (x) => {
         if (x < 2) {
            return false
         }
         for (let i = 2; i < x; i++){
             if (x % i === 0){
                 return false
             }
         }
         return true
     }
     
    const oddDigits = (x) => {
         let arr = x.toString().split("")
         return arr.every(odd)
    }
    
     
   let arrOfOddPrimes = [] 
   for(let i = 3; i < n; i++){
           if (odd(i) && prime(i) && oddDigits(i)){
              arrOfOddPrimes.push(i)
   }}
   
   const isPureODP = (x) => {
       let pure = odd(x) && prime(x) && oddDigits(x)
       return pure
   }
   
   const nextODP = (num = n) => {
      while(!isPureODP(num)){
        ++num
      }
      return num;
   };
   
   result.push(arrOfOddPrimes.length)
   result.push(arrOfOddPrimes[arrOfOddPrimes.length-1])
   result.push(nextODP())
   
   return result
      
   }

   onlyOddDigPrimes()