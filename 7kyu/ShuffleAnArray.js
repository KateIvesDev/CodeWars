/*Write a function to shuffle an array. Input is an array.

PREP

prep: parameter is an array
return: return the given array in a different order
example: input: [1,2,3] return: for example, [3,2,1] 
pseudo - a simple solution could be to do sort method and Math.random()-0.5 to generate a sort function that will randomly return either a positive or negative number; so this could sort the numbers in array randomly because sometimes a is before, other times b is before a. but, this method isn't reliably random.

better solution is to use the fisher-yates alogorithm, which walks the array in reverse order, and swaps the element with a random element before it.
*/


function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i+1)); //this is a random index from 0 to i;
      [ arr[i], arr[j] ]= [arr[j],arr[i]]
    }
    return arr
  }
shuffle([10,1,2,4,7,8])