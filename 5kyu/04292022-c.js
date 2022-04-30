/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.*/

function humanReadable(seconds){
    let hours = Math.floor(seconds/3600)
    let hoursRem = ((seconds/3600) - hours) * 60
    let minutes = Math.floor(hoursRem)
    let minsRem = (hoursRem - minutes) * 60
    let finalSeconds = Math.round(minsRem)
    
    hours = hours.toString().padStart(2,0)
    minutes = minutes.toString().padStart(2,0)
    finalSeconds = finalSeconds.toString().padStart(2,0)
    
    return `${hours}:${minutes}:${finalSeconds}`
  }