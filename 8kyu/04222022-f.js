/*Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]*/

function multipleOfIndex(array) {
    let newArray=[]
    array.map((value, index) => {
     if(value % index === 0) {
       newArray.push(value)
     }
   })
     return newArray
 }