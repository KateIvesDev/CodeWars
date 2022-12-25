/*Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."

Parameter is an object
Return a string that references the values of the object
Example: {name:"dog",legs:4,color:"white"} returns "This white dog has 4 legs."
Pseudo: return a template literal that references the object values using dot notation.
*/




function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }

animal({name:"dog",legs:4,color:"white"})