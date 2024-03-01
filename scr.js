// my foreach function
function myForEach(callBack, array){
  for(let i = 0; i < array.length; i++){
    callBack(array[i],i);
  }
}

myForEach(function(element){
  console.log(element);
}, [1,2,3])

// my map function

function myMap(callback, array){
  const mappedArray = [];
  for(let i = 0; i < array.length; i++){
    mappedArray.push(callback(array[i],i,array));
  }
  return mappedArray;
}

let arr = myMap(n=>n*10,[1,2,3,4]);
console.log(arr);
// my every() method
function myEvery(callback, array){
  for(let i = 0; i < array.length; i++){
    let result = callback(array[i],i,array);
    if(!result){
      return false;
    }
  }

  return true;
}

console.log(myEvery((el)=>el>10,[11,12]));

// my filter function

function myFilter(callback, array){
  const filteredArray = [];
  for(let i=0; i < array.length; i++ ){
    let result = callback(array[i],i,array);
    if(result){
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
debugger;
let numbers = [1,20,12,33,22];
let filter = myFilter((m)=>m<=21,numbers);
console.log(filter);

// my find() method

function myFind(callBack,array){
  for(let i = 0; i < array.length; i++){
    let result = callBack(array[i], i, array);
      if(result){
        return array[i];
      }
  }
  return;
}

let res = myFind((el)=>el==12,numbers);
console.log(res);


// my some() method
function mySome(callBack,array){
  for(let i = 0; i < array.length; i++){
    let result = callBack(array[i], i, array);
      if(result){
        return true;
      }
  }
  return false;
}

console.log(mySome((n)=>n%7===0,numbers));