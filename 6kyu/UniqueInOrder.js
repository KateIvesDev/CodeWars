
/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

PREP
Parameter given can be either an array or string with a sequence of items
Return should be an array of elements that preserves the order of elements, but removes duplicates that are adjacent to each other.
Example: [1,2,2,2,3] should return [1,2,3]; ["AABBCCAA"] should return ["A", "B", "C", "A"]
Pseduo code: create an empty array that will return the final result. use a for loop to iterate through the string or array; if the item is not the same as the item after it, push that item to the empty array. then return the new array.
*/

var uniqueInOrder = function(iterable){
    let arr = []
    for (let i = 0; i < iterable.length; i++){
      if(iterable[i] !== iterable[i+1])  {
        arr.push(iterable[i]);
      }
     }
    return arr
  }

  uniqueInOrder('AAAABBBCCDAABBB')

  /* A better way to do this would be to use the filter method and spread operator. create a function unique that returns a boolean  if an item is not identical to the next item in the iterable array. we can then return a filtered copy of the array based on the unique function. first use the spread operator to create an array from the given parameter. use the filter method on that array, which takes the callback function unique. this filter method creates shallow copy that filters out items that do not pass the unique test; so if the unique function evalutes the item in the array as false, the filter method will not include that item in the array copy. */

  function uniqueInOrderTwo(iterable){

    const unique = (x,i) => x !== iterable[i+1]
    
    return [...iterable].filter(unique)

  }
  uniqueInOrderTwo('AAAABBBCCDAABBB')