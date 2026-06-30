// Write a recursive function to find the sum of digits of a positive integer n

function sumOfDigits(n) {
  if (n === 0) return 0;

  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(12345));

// Remove duplicates from a nested array

function removeDuplictes(arr, seen = new Set()) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...removeDuplictes(item, seen));
    } else {
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
  }
  return result;
}

console.log(removeDuplictes([1, [2, 3, [2, 4]], 3, 5]));

// flattern a nested array using recursion

function flattern(arr, result = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattern(item, result);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattern([1, [2, 3, [2, 4]], 3, 5]));

//Count zeros in nested array (recursion)

function countZeros(arr) {
  let count = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      count += countZeros(item);
    } else {
      if (item === 0) count++;
    }
  }
  return count;
}

console.log(countZeros([1, [2, 0, [2, 0]], 3, 0]));

// binary serach recursion

function binaraySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] > target) {
    return binaraySearch(arr, target, left, mid - 1);
  } else {
    return binaraySearch(arr, target, mid + 1, right);
  }
}

console.log(binaraySearch([1,2,3,4,5],2));
