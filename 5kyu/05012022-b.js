/*The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:
The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
*/

function perimeter(n) {
    n = n + 2
    let array = Array.apply(null, {length: n})
    array = array.fill(1).map((elem,index, currentArray)=>{
      if(index === 0){
          currentArray[index] = 0;
      }else if(index === 1){
              currentArray[index] = 1;
      }else{
          currentArray[index] = currentArray[index-2]+currentArray[index-1];
      }
          return currentArray[index];
      });  
  
      let sumSeq = array.reduce((a,b) => a + b)
      
      let perimeter = sumSeq * 4
      return perimeter
  }