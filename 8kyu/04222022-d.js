/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.*/


function isVow(a){

    let newArray = a.map((value) => {
         if (value === 97){
             return value = "a"
         } else if (value === 101) {
              return value = "e"
         } else if (value === 105) {
             return value = "i"
         } else if (value === 111) {
             return value = "o"
         } else if (value === 117) {
             return value = "u"
         }
         return value
     })
     
     return newArray
   }