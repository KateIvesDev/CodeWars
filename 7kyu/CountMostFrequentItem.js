/*Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0 

PREP
Parameter: The function takes an array of integers
Return: Return a number that is the count of the most frequent integer in the  array; if the array is empty, return 0
Example: [-1,2,2,2,2,2,-1] should return 5 since the number 2 appears five times
Pseudo: Create an empty object, then use a for/of loop to iterate through the array and if the item in the array appears as a property of the result object, increment the value by 1, if it hasn't appeared yet, set the value to 1. create an array of values from the result object using the Object.values method; use a ternary to check if the values array is empty by using the length property; if the length is 0, return 0, else return the Math.max of the values array.


*/
function mostFrequentItemCount(collection) {
 
  let result = {}
  
  for (let item of collection){
    if(result[item]){
      result[item] += 1
    } else {
       result[item] = 1
    }
  }
  let values = Object.values(result)
 
  return values.length === 0 ? 0 :  Math.max(...values)
  
}
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))