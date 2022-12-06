/* eslint-disable no-undef */
/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


function count(string) {
    let arr = string.split("")
    const count = {};
    for (const element of arr) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    return count
  }
count()

PREP & REFACTOR 
Parameter is a string of characters;
Return is an object that contains key-value pairs of a key of each character and a value equal to the count of each character
Example: "parameter" would return {'p': 1, 'a':2, 'r': 2, 'm': 1, 'e':2, 't': 1}
pseudo code: create an empty object literal; use a 'for of' loop to iterate through the string; within the loop use an if/else conditional; if the character is a key in the object, then increment the value of the key by 1; if it is not a key in the object, set the character as key with a value equal to 1
*/

function count(string){
  const result = {}

  for (char of string){
    if (result[char]){
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result

}

console.log(count("parameter"))
