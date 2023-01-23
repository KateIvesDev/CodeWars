/*the function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above. The list will be an array of numbers; could be a very long list.

Parameter: Parameter is an array of numbers; could have thousands of elements

Return: The function should return an array that contains a list of the sum of its parts

Example: [0,1,3,6,10] would return [20, 20, 19, 16, 10, 0], because you are taking the sum at each index as you move across the array.

Pseudo - We can use the array prototype and array fill method to create array of Zeros based on the length (plus one) of the input array = we add the extra element so that the last index of the array will always be zero bc in this problem, the final sum is an empty array/zero. then we can reverse loop through input array with a for loop; on each iteration, we can set the element at the current index in result to the number at the current index of the input array plus the number at the current index of the result array plus 1. so, on the first iteration, the last index of result is equal to the last index of the input array (10) plus the last index+1 of the result array (0). on the second iteration, the current index of result is equal  to 6 (ls[i]) plus 10 (result[i+1]) = 16, etc.


*/


function partsSums(ls) {
    let result = Array(ls.length + 1).fill(0);
      for (let i = ls.length - 1; i >= 0; i--) {
          result[i] = ls[i] + result[i + 1];
      }
      return result;  
    
  }
partsSums()