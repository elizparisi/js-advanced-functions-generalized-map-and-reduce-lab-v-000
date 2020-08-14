// Add your functions here

function map(array, func){
  let result = [];
  for (let i = 0; i < array.length; i++){
    result.push(func(array[i]))
  }
  return result;
}

