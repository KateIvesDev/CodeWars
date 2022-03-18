//Complete the square sum function so that it squares each number passed into it and then sums the results together.For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

/*FIRST TRY
function squareSum(numbers){
    let squareNum = [];
    
    numbers.forEach(num => {
        squareNum.push(Math.pow(num, 2))
        return squareNum  
    }) 
    
    let sum = 0;
    for (let i = 0; i < squareNum.length; i++){
        sum = sum + squareNum[i] 
    }
    return sum
  
}
squareSum([1, 2, 4]) */

function squareSum(numbers){
    
    let sum = 0;
    numbers.forEach(num => {
        sum += (num * num)
    })
    return sum
   
}
squareSum([1, 2, 4])