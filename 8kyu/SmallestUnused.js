/*Therefore you need a method, which returns the smallest unused ID for your next new data item...*/

function nextId(ids){
    for (let i = 0; i < ids.length; i++) {
       if(!ids.includes(i)) {
        return i
    }
     
     } {return ids.length}
   }
nextId()