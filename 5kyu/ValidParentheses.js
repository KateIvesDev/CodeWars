/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

PREP
Parameter is a string of parentheses
Return true if the order of parentheses in the string is valid, false if not
Example "()()()" returns true "))(" returns false
Pseudo - first, take the string and use the replace all method and replace all '()' and store resulting string to a new variable. use an if, else if, else statement - if the resulting string has a length of 0, this means the string only had valid parentheses, so return true; since its possible for the new string to still include valid parentheses (due to nested parentheses), use the includes method and if the string still includes (), return a recursive call of the function, else return false because its not possible for the string to contain a valid parentheses.
*/


function validParentheses(parens) {
    let str = parens.replaceAll('()', '')
   
    if (str.length === 0){
        return true
    } else if (str.includes('()')){
        return validParentheses(str)
    } else {
        return false
    }
 }
 validParentheses('(())((()())())')