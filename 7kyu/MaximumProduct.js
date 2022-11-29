/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

//PREP

parameter is an array of integers that could be pos, neg or zero

return the largest product that can be obtained from multiplying 2 adjacent nums in the array
example: [2,3,4,5] as parameter would return 20 as the max product (4*5), [10,100, 1,2,3] would return 1000 as max product (10*100)

pseudocode: create an empty array; loop through the given array; on each increment, push the product of the 2 adjacent nums to the empty array, sort then new array in ascending order and return the last item in the new array 

*/

function adjacentElementsProduct(array) {
    
    let newArr = []
  
    for (let i = 0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }
  
    newArr.sort((a,b) => a-b)
  
    return newArr[newArr.length-1]
  }

  adjacentElementsProduct()