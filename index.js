// Add your functions here

function map(array, func){
  let result = [];
  for (let i = 0; i < array.length; i++){
    result.push(func(array[i]))
  }
  return result;
}


function reduce(array, start, func){
  let result = (!!start) ? start : array[0];
  for (let i = 0; i < array.length; i++){
    result = (func(array[i], result))
  }
  return result;
}
