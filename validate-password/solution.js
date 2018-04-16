//My incorrect answer
// function validatePIN (pin) {
//   if(typeof(parseInt(pin)) === ("number") && pin.length === 4 || pin.length === 6) {
//   return true;
//   } else {
//     return false;
//   }
// }

//One correct solution
// function validatePIN (pin) {
//   //return true or false
//   var n = pin.length;
//   if( n != 4 && n != 6)
//       return false;
//   for (var i in pin)
//       if (pin[i] > '9' || pin[i] < '0')
//           return false;
//   return true;
// }

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}