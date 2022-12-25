function buildString(...template){
    let string = template.join(', ')
    return `I like ${string}!`;
  }

  buildString("cheese")