/*Write a function that finds the sum of all its arguments. The number of arguments is not known.*/


function sum(...args) {
    return args.reduce((a,b)=> a+b,0)
  }