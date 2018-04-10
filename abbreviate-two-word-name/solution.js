function abbrevName(name){
  const strArray = name.split(' ');
  let initials = [];
  
  for(var i in strArray) {
    let firstLetters = strArray[i].charAt(0);
    initials.push(firstLetters.toUpperCase());
    
  }
    return initials.join('.')
}