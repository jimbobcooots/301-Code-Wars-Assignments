function disemvowel(str) {
  let strSplit = str.split('')
  let vowels = ['a','e','i','o','u'];
  let noVowels = [];
  for (let i = 0; i < strSplit.length; i++){
    let letter = strSplit[i]
    if(vowels.indexOf((letter).toLowerCase()) > -1) {
    continue;
    } else {
    noVowels.push(letter);
    }
  }