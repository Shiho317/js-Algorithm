//Find the missing number in a given integer array of 1 to 100

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const findNum = () => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i + 1] - arr[i] !== 1){
      return arr[i] + 1
    }
  }
}

console.log(findNum());

//Find a duplicate number in an array of integers

const array = [1,2,3,4,5,6,7,7,8,6,10];

const findDuplicate = (arr) => {
  const duplicate = {}
  for(let i = 0; i < arr.length; i++){
    if(duplicate[arr[i]]){
      return arr[i]
    }else{
      duplicate[arr[i]] = arr[i]
    }
  }
  return false
}

console.log(findDuplicate(array))


//Find the largest and smallest number in an unsorted array of integers

const findNums = (nums) => {
  for(let i = 0; i < nums.length; i++){
    for(let x = 0; x < nums.length - 1; x++){
      if(nums[x] > nums[x+1]){
        [nums[x], nums[x+1]] = [nums[x+1], nums[x]]
      }
    }
  }
  const max = nums[nums.length - 1];
  const min = nums[0]
  console.log(max, min)
}

findNums([1, 2, 3, 4, 100])


//Return an array showing the cumulative sum at each index of an array of integers

const calc = (arr) => {
  let total = [arr[0]];
  for(let i = 1; i < arr.length; i++){
    total.push(arr[i] + total[i - 1])
  }
  return total
}
console.log(calc([1,3,5,7]))


////////////////////Find all duplicate numbers in an array with multiple duplicates

const dupArr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];

const createArr = (arr) => {
  let newDup = {}
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(newDup[arr[i]]){
      if(newDup[arr[i]] === 1){
        newArr.push(arr[i])
      }
      newDup[arr[i]] = newDup[arr[i]] + 1
    }else{
      newDup[arr[i]] = 1;
    }
  }
  return newArr
}

console.log(createArr(dupArr));

//Remove all duplicates from an array of integers

const firstArr = [1, 1, 1, 1, 1, 1, 1];

const findDup = (arr) => {
  let result = [];
  let previous = [];
  previous[0] = arr[0]

  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== previous){
      result.push(arr[i])
    }
    previous = arr[i]
  }
  return result
}

console.log(findDup(firstArr));


//////////////////Find all pairs in an array of integers whose sum is equal to a given number

let ar = [1,5,6,1,0,1];
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];
  
  for(let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];
    
    if(sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }  
    
    sumsLookup[arr[i]] = true;
  }
  
  return output;
}
console.log(findSumPairs(ar, 6));