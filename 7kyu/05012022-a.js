/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

function solution(str, ending){
  
    let lengE = ending.length
    let substring = str.slice(str.length - lengE)
  
    return (substring === ending) ? true : false
    
}