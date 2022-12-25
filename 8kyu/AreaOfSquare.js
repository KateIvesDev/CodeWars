/*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

PREP
Parameter is the length of an arc inside of a square
Return
*/

function squareArea(A){
    // radius is equal to the length of the arc divided by the angle in radians; to convert 90 degrees 
    // multiply by PI/180
    
    let radius = A/(90 *(Math.PI/180))
    
    return Math.round( (radius**2) * 100)/100
    
  }
squareArea(2)