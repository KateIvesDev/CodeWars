/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

PREP
Parameter: Function takes 2 arrays of numbers
Return: Return true if the numbers in array2 are squares of the numbers in array1;numbers in array2 appear the same number of times in array1; if they are not the same, or one or both of the arrays are null, return false.
Example:[121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361] would return true because all of the numbers in array2 are squares of the numbers in array1 and occur same number of times
Pseudo: use an if condition to return false if either arrays is null; we can map array2 to get the squareroot of each number and make a new array. then we can sort array1 and the mapped array to make them easier to compare; then use a for loop to check if each number at each index is the same; if the iteration is false, return false; otherwise the function returns true
*/

function comp(array1, array2){
    console.log(array1,array2)
    if (array1 === null || array2 === null){
      return false
    }
   
    let mapped = array2.map(num => Math.sqrt(num))
    
    array1.sort((a,b)=> a-b)
    mapped.sort((a,b) => a-b)
    
    for(let i=0; i < array1.length; i++){
            if (array1[i] !== mapped[i]){
        return false
        }
    }
    return true
  }
comp()