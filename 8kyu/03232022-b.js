//Clock shows h hours, m minutes and s seconds after midnight.Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let mH = h * 3.6e+6;
    let mM = m * 60000;
    let mS = s * 1000;
    
    return mH+mM+mS
}
