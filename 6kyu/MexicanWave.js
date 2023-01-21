/* turn a string into a mexican wave, i.e., return the string as an array that, at each index, contains the same string with the next letter capitalized. the input will always be tlowercase, but could be an empty string; if the string contains a space, ignore it.


prep
Parameter - the function takes a string of characters; the string may be empty or may contain spaces.

Return - return an array that contains a copy of the string at each index for the length of the string; but for each copy of the string, the next letter should be capitalized

Example: "hello" should return ["Hello", "hEllo", "heLlo", "helLO", "hellO"]

Pseudo: we can use the Array prototype method and fill method to create an array filled with copies of the given string, for the number of times equal to the string length (which isn't perfect bc the length includes spaces but we'll get to that). we save that to a variabel "arr"; then we can call the map method on arr to transform each string; within the map method, on each iteration of the string, the string is split into a subarray and the character at the current index is changed to upper case;then the array is mutated back to a string with the join(). we alson chain the filter method on the return arr to eliminate instances of the string in the array that are strictly equal to the input string; this is to remove extra instances of the string caused by using a length that doesn't take into account any spaces in the string.


*/
//second try, tried to make it clearer
function wave(str){
   
    let arr = Array(str.length).fill(str)
    
    return arr.map((word, index) => {
    
            let subarr = word.split("")
       
            subarr[index] = subarr[index].toUpperCase()
       
       return subarr.join("")
     
    })
    .filter(el => el !== str)
   }
wave()
/*

first try 

function wave(str){
    let arr = str.split("")
    let result = []
    for (let i=0; i < str.length; i++){
      arr[i] = arr[i].toUpperCase()
      if (arr[i-1] !== undefined){
        arr[i-1] = arr[i-1].toLowerCase()
      }
     result.push(arr.join(""))
    }
  
     const same = (x) => x === str
  
     return result.filter(el => !same(el))
  }
wave()

*/