/*Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

function findLongest(str) {
  
  let arr = str.split(" ");
  
  arr = arr.sort((a,b) => b.length - a.length)
  
  return arr[0].length
   
}