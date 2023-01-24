
/* given two strings, the goal is to visualize how different the strings are. Only take into account lowercase letters (a to z). First count the frequency of each lowercase letter in string1 and string 2. Then, only take into account letters where the maximum ocurrence is greater than 1.

The task is to return a string in which each lowercase letter meeting the above conditions appears as many times as the maximum number it appears, as follows:

    if the maximum appearance occurs in string 1, prefix the letters with "1:"
        so if "e" appears 5 times in string 1, and that is the maximum time it appears in both strings, the string would be: "1:eeeee"
    if the maximum appearance occurs in string 2, prefix the letters with "2:"
         so if "a" appears 6 times in string 2, and that is the maximum time it appears in both strings, the string would be: "2:aaaaaa"
    if the letter appears the same number of times in both strings ,prefix the letters with "=:"
        so if "t" appears the same number of times (2) in each string, the string would be "=:tt"

Finally, for each substring created above, the strings should be sorted  be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order. Return all the substrings in one string, where each string is  separated by '/'.

PREP

Pseudo: use a for loop to count the lowercase letters in each string parameter and save to objects count1 and count2. save a regex of all lowercase letters to variable lower and on each iteration of the for loop, check to make sure the letter is lowercase; use an arrow function to create a filter that will remove any letters that only appear once; then we can use the Object.keys() to get they keys of both count objects and save those as obj1keys and obj2keys. then we can use Set() and the spread operator to add the keys of both objects into one set of unique keys. we can then use the forEach method on the set of keys to compare the values of each key of both objects and push the appropriate string pattern to an empty result array. depending on if the key value is bigger than, equal to, or less than the key value in the other array, we push a string pattern according the rules setforth in the challenge. we use a template literal for the required prefix and concatenate that with an array that contains the key the max number of times it appears.

the result array contains the string patterns, but they are not in the appropriate order. we create a new function that, when called, will first sort the strings by length and then lexographically. we use the join("/") method to return a single string where all the substrings are separated by a back slash.
*/

function mix(s1, s2) {
    let lower = /[a-z]/
    let count1 = {}
    let count2 = {}
    
    for (let i=0; i < s1.length; i++){
    if(s1[i].match(lower)){
       if (count1[s1[i]]){
         count1[s1[i]] += 1
       } else {
         count1[s1[i]] = 1
       }
      }
    }
   
    for (let i=0; i < s2.length; i++){
    if(s2[i].match(lower)){
       if (count2[s2[i]]){
         count2[s2[i]] += 1
       } else {
         count2[s2[i]] = 1
       }
      }
    }
    
     const filterOnes = (obj) => {
      return  Object.fromEntries(
         Object.entries(obj).filter(
           ([key, value]) => value > 1
         ))
     }
    
     let one = filterOnes(count1)
     let two = filterOnes(count2)
     let result = []
   
     const obj1keys = Object.keys(one);
     const obj2keys = Object.keys(two);
     const keys = new Set([...obj1keys, ...obj2keys]);
   
     keys.forEach(key => {
         if (one[key] > two[key]) {
           result.push(`1:` + Array(one[key]).fill(key).join(""));
       } else if (two[key] > one[key]) {
           result.push(`2:` + Array(two[key]).fill(key).join(""));
       } else if (one[key] && two[key]) {
           result.push(`=:` + Array(one[key]).fill(key).join(""));
       } else {
           if(one[key] && !two[key]){
               result.push(`1:` + Array(one[key]).fill(key).join(""));
           } else {
               result.push(`2:` + Array(two[key]).fill(key).join(""));
           }	
       }
     });
   
    function sortByLengthAndLexicographic(a, b) {
       if (a.length < b.length) {
         return 1;
       }
       if (a.length > b.length) {
         return -1;
       }
       if (a < b) {
         return -1;
       }
       if (a > b) {
         return 1;
       }
       return 0;
     }
   
     return result.sort(sortByLengthAndLexicographic).join("/")
    
   }

console.log(mix("A generation must confront the looming ", "codewarrs"))