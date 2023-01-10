/*Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

PREP
Parameter - The function will take a string of characters
Return - The function should return a count of the number of occurences of each character and return the character and count as a list of tuples (e.g., ["character", count]) in order of appearance
Example - parameter "abracadabra" would return [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] 
Pseudo - the key thing here is that the return list must be in order of appearance, so iterating keys from the string to a basic object won't work bc object keys aren't ordered. if you need your object keys to be ordered, use Map. so we'll take the string and use split method to make it an array; we'll make a Map object from the array by using reduce on the array. 

the .get method is used on the acc Map object to retrieve the current count of the cur element; if the element isn't in the map yet, it will return undefined, so "|| 0", initializes the count to zero if it doesn't exist yet, then it increments the count by 1. the .set method on the acc Map object sets the value for the key to the incremented count; the initial value passed to the reduce methods is new Map(), which creates an empty map as the initial value of the acc. then we want to return an array of tuples that maintain the order of the original string characters. we'll use the entries method to return a new iterator object that contains an array of [key, value] for each element in the map object, in insertion order; the spread operator converts the iterable object into an array

*/

const orderedCount = function (text) {
    let arr = text.split("")
    
    const map = arr.reduce((acc, cur) => acc.set( cur, (acc.get(cur) || 0) + 1), new Map())
    
    
    return [...map.entries()]
     
}
console.log(orderedCount("abracadabra"))
console.log(orderedCount("233312"))