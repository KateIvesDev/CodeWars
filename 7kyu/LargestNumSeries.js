/*Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

PREP
Parameter will be a string of only digits that may be as long as 1000 digitis;
Return should be a number that is the greatest sequence of 5 consecutive digits in the parameter
Example: "1234567890" should return 67890
Pseudo code: brute force solution is to create an empty array, loop through the string and push every 5 digit sequence to the empty array and then return the maximum of the array

*/




function solution(digits){

    let sequences = []
  
    for (let i=0; i < digits.length; i++){
        sequences.push(digits.slice(i, i+5));
    }
    return Math.max(...sequences)
  }
  console.log(solution(["1234567890"]))