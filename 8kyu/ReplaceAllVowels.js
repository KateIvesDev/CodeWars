function replace(s){
    return s.replaceAll(/[aieouAEIOU]/g, '!')
}

replace("Hello!")