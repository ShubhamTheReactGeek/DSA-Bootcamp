function Sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }
  return res;
}

// console.log(Sum([1,2,3,4,5]))

function CountOddNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      count++;
    }
  }
  return count;
}

// console.log(CountOddNumbers([10,8,5,7,2]))

function isArraySorted(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// console.log(isArraySorted([1,2,3,0,5]))

function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // 3 variables concept to swap
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

const arr = [1, 2, 3, 4, 5];

console.log("BEFORE ARR", arr);
reverseArr(arr);
console.log("AFTER REVERSE", arr);
