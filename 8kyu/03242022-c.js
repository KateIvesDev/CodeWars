//Write function bmi that calculates body mass index (bmi = weight / height2).
//if bmi <= 18.5 return "Underweight"
//if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"

//if bmi > 30 return "Obese"

function bmi(weight, height) {
   
    let calcBMI = weight/(height**2)
    
    
    if(calcBMI <= 18.5) {
        return "Underweight"
    } else if(calcBMI <= 25) {
        return "Normal"
    } else if(calcBMI <= 30) {
        return "Overweight"
    }else if(calcBMI > 30) {
        return "Obese"
    }
   return calcBMI;
 }
 console.log(bmi(80, 1.80))