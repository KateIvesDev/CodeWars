/*take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
Parameter is an array; the array can include both pos and neg integers
Return the lowest index in the array where the sum of left side integers equals the sum of right side integers; if there is no instance where this is true, return -1; 
Example: [1,2,3,4,3,2,1]; in this example [1,2,3] on the left, equals [3,2,1] on the left, so you return the index of num4 (which is 3) since it is between the two; 
Pseudo

*/

function findEvenIndex(arr){
    //Check if the sume of integers in array after index 0 is equal to zero; because in this case the left side is an empty array, which is equal to 0; if both sides equal zero, return the index of 0
    let half = arr.slice(1, arr.length)
    if(half.reduce((a,b) => a+b, 0) === 0){
        return 0
    }
    let sumleft;
    let sumright;
    let i;
    for (i=0; i < arr.length; i++){
    //iterate through the array; on each iteration, find the sum of the left side integers and sum of the right side integers
     let left = arr.slice(0,i+1)
     sumleft = left.reduce((a,b) => a+b,0)
   
     let right = arr.slice(i+2, arr.length)
     sumright = right.reduce((a,b) => a+b,0)
   
     //at the end of each iteration, check to see if the sum of the sides are equal, and if they are return i+1 which represents the index of the integer between the two sides
       if (sumleft === sumright){
          return i+1
       }
     }
     //if the sums are never equal 
     return -1
}
findEvenIndex([1,2,3,4,3,2,1])