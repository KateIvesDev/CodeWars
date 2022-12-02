/*In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.


PREP
Parameter is an array of strings; strings will have duplicate consecutive letters; strings will all be lowercase
Return should be the array of strings, with duplicate consecutive letters removed from the strings
Example: ["teest", "llaunch"] should return ["test", "launch"] removing "e" from the first string and "l" from the second string in the array
Pseudo: create an empty array for the return array; use a for loop to iterate through the given array; use the split() to convert each string to an array of letters; iterate through each array of letters; if the first letter is !== 
 the second letter, push() the first letter to a new array; then convert each letter array back to a string with join(), and push() to the return array
*/


function dup(s) {
    let result = []
    for (let i = 0; i < s.length; i++){
      let word = s[i]
      word = word.split("")
    
      let newWord =[]
      for (let j=0; j < word.length; j++){
          if (word[j] !== word[j+1]){
             newWord.push(word[j])
          } 
      }
      result.push(newWord.join(""))
    }
    return result
  }
  
  console.log(dup(["kelless","keenness"]))
  
  //
  /* REFACTOR  this problem can also be solved more simply by use the map method on the given array. use map to iterate through each string, use the split method on each string to convert to an array, then use the filter method to remove the duplicate letter using the !==, and finally join the array back to a string */
  
  function duplicate(wordArray) {
      
    return wordArray.map(word => 
      word.split("")
           .filter((letter,index) => letter !== word[index+1]).join(""))
    
  }
  
  console.log(duplicate(["kelless","keenness"]))