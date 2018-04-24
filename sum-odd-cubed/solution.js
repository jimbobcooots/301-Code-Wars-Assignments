function cubeOdd(arr) {

  for( var i in arr) {
  if (isNaN(arr[i])){
  return undefined;
  }}
  
  
  let cubedArray = arr.map(number => Math.pow(number,3));
  let oddCubed = cubedArray.filter(odd => odd %2 !== 0);
  
  const reducer = (a, c) => a + c;
  
  
  if (oddCubed.length < 1){
  return 0}
  
  return oddCubed.reduce(reducer);
  
  }