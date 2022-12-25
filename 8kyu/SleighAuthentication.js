function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if(name === "Santa Claus" && password === "Ho Ho Ho!") return true;
  return false;
};
