/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

//FIRST TRY
function sumTwoSmallestNumbers(numbers) {  
    numbers = Array.from(arguments); 
    let num = numbers[0];
    num.sort((a,b) => a-b);
    console.log(num)
    let sum = num[0] + num[1];
    return sum
    
  }
  sumTwoSmallestNumbers([15, 28, 4, 2, 43]);

  //REFACTOR

  function sumTwoSmallestNumbers(numbers) {  
 
    numbers.sort((a,b) => a-b);
    console.log(numbers)
    let sum = numbers[0] + numbers[1];
    return sum
    
  }
  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));