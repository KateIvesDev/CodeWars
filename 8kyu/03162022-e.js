//Description You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20. Note: if there is nothing to sum, the sum is default to 0.

let arr = []
function positiveSum(arr) {
  let sum = 0
  
  let filtered = arr.filter(function(value, index, arr){ 
        return value >= 0;
    });
  
  filtered.forEach((item, i) => {
    sum = sum + filtered[i];
   }); 
   return sum
}
   
positiveSum([1, -2, 3, 4, 5]);