
function zero(func) {
	return func ? func(0) : 0
}
function one(func) {
	return func ? func(1) : 1
}
function two(func) {
  return func ? func(2) : 2
}
function three(func) {
	return func ? func(3) : 3
}
function four(func) {
	return func ? func(4) : 4

}
function five(func) {
	return func ? func(5) : 5

}
function six(func) {
  return func ? func(6) : 6
}
function seven(func) {
	return func ? func(7) : 7
}
function eight(func) {
	return func ? func(8) : 8
}
function nine(func) {
	return func ? func(9): 9
}

function plus(a) {
   return function(b){
        return a + b
   }
}
function minus(a) {
	return function(b){
        return b-a
   }
}
function times(a) {
	return function(b){
        return a * b
   }
}
function dividedBy(a) {
	return function(b){
        return b/a
   }
}

console.log(six(dividedBy(two())))
console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
