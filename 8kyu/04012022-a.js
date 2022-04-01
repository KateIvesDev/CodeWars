/*Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!*/

function oddCount(n){
    return Math.floor(n/2);
    }
oddCount(15);

//YOU CANT USE AN ARRAY HERE BECAUSE YOU NEED ARRAY.LENGTH AND IT WILL EXCEED JS MEMOR

/*
function oddCount(n){
  let arr=[]
  if (n > 0) {
    for (let i =1; i < n; i++) {
      if (i % 2 != 0) {
        arr.push(i)
      } 
    }
 
    return arr.length
    
  }
}

console.log(oddCount(15));
*/
        