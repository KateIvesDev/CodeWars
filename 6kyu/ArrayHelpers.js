Array.prototype.square = function() {
    let newArr = []
      for(let i = 0; i < this.length; i++ ){
        newArr.push(this[i]**2)
    }
    return newArr
}
  
Array.prototype.cube = function() {
    let newArr = []
    for(let i = 0; i < this.length; i++ ){
    newArr.push(this[i]**3)
    }
    return newArr
}
  
Array.prototype.average = function() {
    let sum = this.reduce((a,b) => a+b,0)
    return (sum) ? sum / this.length : NaN
}
  
Array.prototype.sum = function(){
    return this.reduce((a,b) => a+b,0)
}
  
Array.prototype.even = function(){
    let newArr = []
    for(let i = 0; i < this.length; i++ ){
        if(this[i] % 2 === 0){
            newArr.push(this[i])
        }
    }
    return newArr
}
  
Array.prototype.odd = function(){
    let newArr = []
    for(let i = 0; i < this.length; i++ ){
        if(this[i] % 2 > 0){
        newArr.push(this[i])
        }
    }
    return newArr
}