/*Given the array shuffled, consisting of elements a1, a2, ..., an, and their sumvalue in random order, return the sorted array of original elements a1, a2, ..., an.

Parameter: Given an array of integers, at least 2 integers in length and at most 30 in length; integers can be negative or positive
Return: The function should return the original array; the return array should be sorted from smallest to largest; the integer that is equal to the sum of the other integers in the array should be removed
Example: original array [1,12,3,6,2] should return [1,3,6,2]; original array [1,-3,-5,7,2] should return [-5,-3,2,7]
Pseudo code: use a for loop to compare the current integer to the sum of the other integers; to get the sum, use reduce method on the array and then subtract the current integer; then you can use splice on the array to remove the current integer; finally you can return the array using the sort method 
*/


function shuffledArray(shuffled) {
    for (let i = 0; i < shuffled.length; i++){
      if(shuffled[i] === (shuffled.reduce((a,b) => a+b)) - shuffled[i]){
        shuffled.splice(i, 1)
        return shuffled.sort((a,b) => a-b)
      }
    }
  }

  shuffledArray()