/*Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p, we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

Parameter: the function will take two positive integers n and p
Return: we want to return a number, k, if it exists. k is equal to the quotient of the sum of the digits of n to the successive powers of p divided by n, if the sum can be divided by n without a remainder. if k doesn't exist, return -1.
Pseudo: To access the digits of n, stringfy the number and use the split method to make an array; use the map method to return the string numbers as numbers; create an empty array; use for loop to iterate over the array of numbers, push the result of the digit multipled to the power of p to the result array; increment p by 1; create a variable sum, that is equal to the result array reduced to the sum; return a ternary, if the sum can be divided by n without a remainder (using modulus), return sum divided by n, else return -1
*/

function digPow(n, p){
    let numArr = n.toString().split("").map(num =>  Number(num))
    let result = []
   
    for(let i = 0; i < numArr.length; i++){
      result.push(numArr[i]**p)
      p++
    }
  
    let sum = result.reduce((acc,cur) => acc+cur, 0)
    return sum % n > 0 ? -1 : sum/n
    
  }

  digPow(81,1)