/* Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list. */

var min = function(list){
    
    return Math.min(...list);
}
console.log(min([5,10,15]))

var max = function(list){
    
    return Math.max(...list);
}
console.log(max([5,10,15]))