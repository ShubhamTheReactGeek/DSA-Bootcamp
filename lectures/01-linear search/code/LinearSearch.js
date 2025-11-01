function linearSearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearch([10,12,8,15,32,16], 20))

function searchInString(str, target) {
  if (str.length === 0) {
    return -1;
  }
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === target) {
      return i;
    }
  }
  return -1;
}

// console.log(searchInString('Shubham', 'z'))

function searchInRange(arr, start, end, target) {
  if (start > end) {
    return -1;
  }
  for (i = start; i <= end; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(searchInRange([10,12,8,5,42,31,84],5,5,31))

function searchIn2DArray(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === target) {
        return [row, col];
      }
    }
  }
  return [-1, -1];
}

console.log(
  searchIn2DArray(
    [
      [10, 12, 8],
      [5, 15, 16, 11],
      [42, 82],
    ],
    11
  )
);
