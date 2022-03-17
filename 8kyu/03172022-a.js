//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//FIRSTTRY

function removeChar(str){

    //You got this!
      if (str.length > 2) {
      let arr = str.split("")
      console.log(arr)
      
      arr.shift();
      arr.pop()
      console.log(arr)
      
      arr = arr.join("");
      console.log(arr)
      
      } 
      
   };
   removeChar("th")

/*REFACTOR 
function removeChar(str) {
  return str.slice(1, -1);
}
*/