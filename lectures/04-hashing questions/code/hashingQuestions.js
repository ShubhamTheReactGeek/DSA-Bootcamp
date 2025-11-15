// Q1 - Highest occuring elements in the array

function maxCount(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]); // O(N)
  }
  const hash = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]]++;
  }
  let maxCount = 0;
  let el = -1;
  for (let i = 0; i < hash.length; i++) {
    if (hash[i] > maxCount) {
      maxCount = hash[i];
      el = i;
    }
  }
  return el;
}

// console.log(maxCount([4,4,5,5,6]))

function secondMaxCount(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  const hash = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]]++;
  }
  let maxCount = 0;
  let el = -1;
  let secondMaxCount = 0;
  let secondEl = -1;
  for (let i = 0; i < hash.length; i++) {
    if (hash[i] > maxCount) {
      secondMaxCount = maxCount;
      secondEl = el;
      maxCount = hash[i];
      el = i;
    } else if (hash[i] > secondMaxCount && hash[i] < maxCount) {
      secondMaxCount = hash[i];
      secondEl = i;
    }
  }
  return secondEl;
}

console.log(secondMaxCount([4, 4, 5, 5, 6, 7]));


// Assignment - Count Elements with maximum frequency - Leetcode 3005

var maxFrequencyElements = function(nums) {
    const map = new Map();
    for(let i=0; i < nums.length; i++){
        map.set(nums[i], ((map.get(nums[i]) | 0) + 1))
    }
    let max = 0;
    let count = 0;
    for (const [key, value] of map) {
        if(value > max){
            max = value;
            count = 1;
        } else if(value === max){
            count++
        }
    }
    return max * count
    
};