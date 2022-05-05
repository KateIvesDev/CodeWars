/*Human readable duration format
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.*/


function formatDuration(seconds) {
    let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }
    let result = []
  
    if (seconds === 0) return 'now'
    
    for (let key in time) {
      if (seconds >= time[key]) {
        let value = Math.floor(seconds/time[key]);
        result.push(value += value > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/,' and'+'$1') : result[0]
  }