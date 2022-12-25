/*You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

Your function should return the 20 year estimate of the stairs climbed using the formula above.*/

function stairsIn20(s){
  
    let newArr = s.flat()
    
    return (newArr.reduce((a,b)=> a+b))*20
      
}
stairsIn20()
