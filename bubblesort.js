let count = 1

function bubbleSort(array){
  //debugger
  let flag = true;
  let n = array.length;

  while(flag){
    flag = false
    for(let i=0;i<n;i++){
      if(array[i] > array[i+1]){
        [array[i],array[i+1]] = swap([array[i],array[i+1]])
        count += 1
        flag = true;
      }
    }
    n -= 1
  }
  return array
}

function swap([a,b]){
  return [b,a]
}

