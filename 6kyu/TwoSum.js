/*Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).


PREP
Parameter: Given an array of numbers and a number
Return: return an array that provides the indices of the two numbers from the array that when summed equal the target number
Example [1,4,2,3], 6 returns [1,2]
Pseudo: create an empty array to hold the result; loop through the array, and use an inner loop to traverse the array in reverse; use an if condition to check if the sume of two numbers equals the target; if it does, push the indices to the empty array and return the array
*/


function twoSum(numbers, target) {
	let result = []
	for(let i=0; i < numbers.length; i++){
        for(let j = numbers.length; j > 0; j--){    
            if(numbers[i] + numbers[j] === target){
                result.push(i,j);
                return result
            }
        }
    }
}
console.log(twoSum[1,2,3], 4)