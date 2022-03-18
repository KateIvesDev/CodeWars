//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let sum = 0;
      for(let i=0; i < arrayOfSheep.length; i++){
          
          if(arrayOfSheep[i] === true) {
              sum = sum += Number(arrayOfSheep[i])
              
             } 
        } return sum
    }
    
    countSheeps([true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true])

/*VERY CLEVER 
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}*/