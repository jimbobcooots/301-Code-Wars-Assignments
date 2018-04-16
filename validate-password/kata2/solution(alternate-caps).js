function capitalize(s){
  let odd = [];
  let even = [];
  
  for(let i in s){
  if(i % 2 === 0){
    odd.push(s[i].toUpperCase());
    even.push(s[i]);
   }
   else{
   even.push(s[i].toUpperCase());
   odd.push(s[i]);
  }
  }
  return [odd.join(''), even.join('')];
}