/*Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples

*/

function sumMul(n,m){
    if(m < 0){
        return "INVALID"
    } else {
        let num = Math.floor(m/n)
        let arr = []
        for(let i = 1; i <= num; i++){
            arr.push(n*i)
    }
       return arr.length > 0 ? arr.reduce((a,b)=> a+b) : "INVALID"
    }
}
console.log(sumMul(2,9))