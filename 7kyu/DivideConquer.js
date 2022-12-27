/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.*/

function divCon(x){
    let strings = x.filter(num => typeof num === "string")
    let numbers = x.filter(num => typeof num === "number")
    
    return numbers.reduce((a,b) => a+b, 0) - strings.reduce((a,b)=> Number(a)+Number(b), 0)
}
divCon([1,2,'3','4'])