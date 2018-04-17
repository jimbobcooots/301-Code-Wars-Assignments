function isNice(arr){
  if (arr.length < 1){
    return false;
  }
  
  for(let i in arr){
    let num = arr[i];

    let less = arr.includes(num - 1);

    let more = arr.includes(num + 1);

    if(less === false && more === false){
      return false;
    }
  }
  
  return true;
}