const a = [20, 10, 30, 60, 50, 90, 70, 40];

const bsort = (array) => {
  let len = array.length;

  for(let i = 0; i < len; i++){
    for(let x = 0; x < len - i; x++){
      if(array[x] > array[x+1]){
        [array[x], array[x+1]] = [array[x+1], array[x]];
      }
    }
  }
  return array;
}
console.log(bsort(a))