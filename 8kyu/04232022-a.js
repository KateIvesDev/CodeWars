/* Creating a custom Array.prototype.filter in javascript*/


Array.prototype.filter = function(func) {
    const filtered = [];
    for( let i = 0; i < this.length; i++) {
      if(func(this[i])) {
        filtered.push(this[i])
      }
    }
    return filtered;
  }