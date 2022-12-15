/*Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


PREP
Parameter is a string with upper and/or lowercase characters, some of which may repeat; all uppercase and lowercase characters are considered the same
Return the character from the string that does NOT repeat; it must be the correct case of the letter in the original string
Example: "stress" should return "t", "Moonman" should return "a"
Pseudocode: one way to brute force this: 

-- create a new variable of the parameter w/ the toLowerCase() method; 
-- create an empty count object and iterate through the string; 
-- use an if/else conditional: if the character is a property in the object already, increment the value by 1; else add it with a value of 1;
-- create a new undefined variable, index to store the index of the non-repeating character (if it exists)
-- use a for of loop to iterate through the key/value pairs in the object; use if condition, if the value === 1 (meaning the character only appears once), give index the value of the index of the character in the lower case string and then break the loop (since we want the first characer that appears only once)
-- return a ternary - if index is undefined (meaning there are no characters that don't repeat), return an empty string, else return the value of index as index of the original string (to get the letter in the correct case)
*/

function firstNonRepeatingLetter(s) {
  
    let count = {}
    let string = s.toLowerCase()
    
    for(let i = 0; i < string.length; i++){
      if(count[string[i]]){
        count[string[i]] +=1
      } else {
        count[string[i]] = 1
      }
    }
    
    let index;
    
    for (const [key, value] of Object.entries(count)) {
      if (value === 1){
           index = string.indexOf(key)
           break
      }
    }
   
    return (index === undefined) ? "" : s[index]
    
    
  }
  console.log(firstNonRepeatingLetter("stress"))

  //A BETTER WAY
  //So the above method is not ideal for time/space complexity. another way is if we use a for loop, we could just look for the letter whose indexOf matches its lastIndexOf (meaning it only appears once)

  function firstNonRepeatingLetterTwo(s){
    let string = s.toLowerCase()
    for (let i = 0; i < string.length; i++){
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])){
            return s[i]
        }
    }
    return ""
  }
  console.log(firstNonRepeatingLetterTwo("stresstest"))