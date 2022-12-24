/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

Parameter: an array of numbers
Return: an array with duplicate numbers from the original array removed
Example: [1,1,2,2,2] returns [1,2]
Pseudo: use the filter method on the original array using a comparison of the index of the current item to the current index; if they are equal, that means the element doesn't occur again in the array.

*/
function distinct(a) {
  
    return a.filter((element, index) => {
      return a.indexOf(element) === index;
    });
}
console.log(distinct([1,1,2]))