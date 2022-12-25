
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin === true){
      sharkSpeed = sharkSpeed/2
    }
      
    if (sharkDistance/sharkSpeed > pontoonDistance/youSpeed){
      return "Alive!"
    } else {
      return "Shark Bait!"
    }
}
shark(50, 8, 4, 20, false)