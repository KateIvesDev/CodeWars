/*All words must have their first letter capitalized without spaces.

PREP
Parameter: we're writing a string method; so when we call the .camelCase() method on any string, it will captialize the first letter of each word
Return: calling the method on a string will return a string where spaces are removed and all first letters of words are capitalized
Example: "hello case".camelCase() will return "HelloCase"
Pseudo: since we're adding a method to the prototype of the String object, "this" is being used to refer to the current instance of the string objec that the camelCase method is being called on. so we reference the current string as "this" and calle the split() method on it to create an array to create an array of the words in the string and remove spaces, saving it to the variable arr. we can then call the map method on arr to transform each word. To transform each word, we call charAt() string method on the first letter and to UpperCase() to capitalize the letter; then we use the slice method to get the portion of the word after the first letter; then we concatenate the two and return the capitalized word under the map method; we chain the join() method to the final return array to return all the letters in the array as a string with no spaces.
*/


String.prototype.camelCase=function(){
    let arr = this.split(" ")
     return arr
             .map(word => {
                 return word.charAt(0).toUpperCase() + word.slice(1)})
             .join("")
   }