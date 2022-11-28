/*Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.*/

//Parameter is an array of integers
//Return should be a string that says "yes ascending" if the array is in ascending order, "yes descending" if the array is in descending order or "no" for all other circumstances (e.g., array is all the same number, or the array length is too short to sort)
//example: if the array is [1,2,3,4] return ascending, if the array is [4,3,2,1] return descending, if the array is [1] return no, if the arrayy is [1,1,1,1,1] return no, if the array is [4, 10, 20, 30] return ascending
//pseudocode: check the array length can be sorted; create a variable to store whether the array is ascending is true or false or null; create a copy of the array to compare (starting from the second item in the array) iterate through the array and check if the next number is greater than the previous number

function isSortedAndHow(array) {
    
    if (array.length < 2){
        return "no"
    }
    
   
    let isAscending = null
    let copyArray = array.slice(1)
    for (let i = 0; i < copyArray.length; i++){ //iterate a comparison based on the length of the copyArray
    
        
        if (copyArray[i] === array[i]){
            continue // if the numbers in the comparison are the same, we want to continue checking the array to see if the rest of the numbers are sorted
        } else if (isAscending === null){
            isAscending = copyArray[i] > array[i]
           // we want to store the boolean value of whether the second number is bigger than the first number to see if the array is ascending; if every number is bigger than the next, isAscending will be true and the array is ascending. if it is false, the array is descending
        } else if (isAscending !== copyArray[i] > array[i]) {
             return "no"
             // we want to return no if the isAcending variable is not equal to the value of the comparison of the next pairing of elements in the array, because this means the array is not sorted. so for example if the array is [1,5,3,2], on the initial comparison, isAscending would be true, but on the second comparison it would be false
        }
    }
   
    if (isAscending === null){
        return "no"
    }//this is in case all of the numbers are equal

    return isAscending ? "yes, ascending"  : "yes, descending"
}
isSortedAndHow()