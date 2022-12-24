/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

PREP
Parameter: The parameter given is a string of characters; 
Return: return a new string that replaces unique characters with "(" and non-unique characters with ")"; ignore capitalization
Example: "din" should return "((("; "recede" should return "()()()"
Pseudo: split the string in am array; use toLowerCase method since we ignore capitalization; create empty array for the return; use a for loop to iterate through the array of characters; we can identify if a character appears only once by comparing the index of the character to the Last index of the character - if the character appears once, the indexes would be equal; if they are equal, push the ("(") char to the empty array; otherwise, push the ")" to the empty array; return the result array and apply the join method to return as a string;

*/ 

function duplicateEncode(word){
   let arr = word.toLowerCase().split("")
   let result = []
   
   for (let i=0; i < arr.length; i++){
     if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
       result.push("(")
     } else {
       result.push(")")
     }
   }
  return result.join("")
}
duplicateEncode()