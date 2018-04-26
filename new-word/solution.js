function mutateMyStrings(stringOne, stringTwo){
  let arrayOne = stringOne.split('');
  let arrayTwo = stringTwo.split('');
  let newString = (stringOne + '\n');

  for (var i in arrayOne) {
    if (arrayOne[i] !== arrayTwo[i]) {
      arrayOne[i] = arrayTwo[i];
      newString = newString.concat(arrayOne.join('') + '\n');

    }
  }
  return newString;
}