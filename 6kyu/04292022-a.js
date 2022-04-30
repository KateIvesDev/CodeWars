/*Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/

function digital_root(n) {
  
    let arr = n.toString().split("")
    
    arr = arr.reduce((a,b) => Number(a)+ Number(b))
    let sum = arr
    
    if (sum.toString().length > 1){
      return digital_root(arr)
    } else {
      return Number(sum)
    }
    
  }