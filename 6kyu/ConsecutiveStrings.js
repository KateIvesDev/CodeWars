/*You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array. 

n being the length of the string array, if n = 0 or k > n or k <= 0 return ""

PREP
Parameter: Function takes two parameters, an array of strings (strarr) and an integer (k)
Return: Function needs to return a string - the first longest string consisting of (k) consecutive strings in the array; if the array's length is 0, or if (k) is greater than the array length or if (k) is less than or equal to zero, return ""
Example: ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2 would return folingtrashy because it is the longest first string from combining 2 consecutive strings

Pseudo = first need to declare a variable "n" to store the array length, and use an if conditional to return "" if the array is empty, or if the array length is less than k or if k is less than or equal to zero. 

we can use the map method on the string array to transform each element to a combination of consecutive strings; within the map method, we can use the slice method to get an array of consecutive strings based on the current index and k; then use the join method to transform that array into the string of consecutive k strings. we store the new array of consecutive strings to a variable 'newArr'.

create a variable that stores a new array of the lengths of the consecutive strings in 'newArr' via the map method. use the Math.max method on the array of lengths to find the longest length and store that number to a new variable. then use the indexOf method to identify the index of the first largest length and store that as a variable 'indexOfMax'

finally, return the value from the 'newArr' that is equal to the 'indexOfMax' variable.

*/


function longestConsec(strarr, k) {
    let n = strarr.length
   
     if (n === 0 || k > n || k <= 0){
       return ""
     }
     
    const newArr = strarr.map( (index) => {
        return strarr.slice(index, index+k).join("")
    })

    const strLengths = newArr.map(item => item.length)
    const maxLength = Math.max(...strLengths)
    const indexOfMax = strLengths.indexOf(maxLength)

    return newArr[indexOfMax]
    
}



 longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
