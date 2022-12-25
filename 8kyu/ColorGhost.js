/*Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated*/

var Ghost = function() {
  
    const colors = ["white", "yellow", "purple", "red"]
    
    let randomColorIndex = Math.floor(Math.random()*colors.length)
    
    this.color = colors[randomColorIndex]
    
  };

let ghost = new Ghost();
ghost.color