// Bubble Sort

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("Bubble Sort", BubbleSort([2, 3, 4, 1, 5, 6]));

// Merge Sort

function MergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  return Merge(left, right);
}

function Merge(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

console.log("Merge Sort ", MergeSort([2, 3, 4, 1, 5, 6]));

// Quick Sort

function QuickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
        left.push(arr[i])
    }else {
        right.push(arr[i])
    }
  }
  return [...QuickSort(left),pivot,...QuickSort(right)]
}

console.log("Quick Sort ", QuickSort([2, 3, 4, 1, 5, 6]));
