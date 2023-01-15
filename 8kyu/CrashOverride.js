
function aliasGen(first, last){
    const firstInitial = first[0].toUpperCase()
    const lastInitial = last[0].toUpperCase()
    
    if (!firstInitial.match(/[A-Z]/) || !lastInitial.match(/[A-Z]/)){
      return "Your name must start with a letter from A - Z."
    } else return firstName[firstInitial] + " " + surname[lastInitial]
}