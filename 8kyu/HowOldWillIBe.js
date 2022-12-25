function calculateAge(birth, year) {
    if (birth < year){
      let count = year - birth
      return count === 1 ? `You are ${count} year old.` : `You are ${count} years old.`
    } else if (birth === year){
      return `You were born this very year!`
    } else if (birth > year){
      let count = birth - year
      return count === 1 ? `You will be born in ${count} year.` : `You will be born in ${count} years.`
    }
}
calculateAge(2001, 2100)