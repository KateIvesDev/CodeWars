/*Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.*/

function smaller(nums) {
  
  const smaller = (num,item) => num > item
  
  return nums.map((num, index) =>  {
     let right = nums.slice(index+1)
     let small = right.filter(item => smaller(num,item))
     return small.length
  })
}
smaller()