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

console.log(binaraySearch([1, 2, 3, 4, 5], 2));

//group anagrams

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagram(strs) {
    let obj = new Map();
    for (let char of strs) {
        let rev = char.split("").sort().join("");
        if (!obj.has(rev)) {
            obj.set(rev, []);
        }
        obj.get(rev).push(char);
    }
    return Array.from(obj.values());
}

console.log(groupAnagram(strs));

//////////////////////////////////

// valid anagram

function isValidAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let freq = {};
    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!freq[char]) return false;
        freq[char]--;
    }
    return true;
}
console.log(isValidAnagram("cat", "tac"));

////////////////////////////////////

// fibnocci series

function fib(num, a = 0, b = 1) {
    if (num === 0) return;
    console.log(b);
    return fib(num - 1, b, a + b);
}
fib(10);

////////////////////////////////////

//reverse string using recursion

let str = "haran";

function reverse(str) {
    if (str.length === 0) return "";
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse(str));

////////////////////////////////////

// capitalise first letter of an string

function capitalise(str) {
    // return str[0].toUpperCase() + str.slice(1)
    return str.slice(0, -1) + str[str.length - 1].toUpperCase();
}
console.log(capitalise(str));

////////////////////////////////////

//sum of digits

function sumofdigits(num) {
    if (num === 0) return 0;
    return (num % 10) + sumofdigits(Math.floor(num / 10));
}
console.log(sumofdigits(19));

////////////////////////////////////

// palindrome

function palidrome(str, left = 0, right = str.length - 1) {
    if (left >= right) return true;
    if (str[left] !== str[right]) return false;
    return palidrome(str, left + 1, right - 1);
}
console.log(palidrome("racecsar"));


////////////////////////////////////

// sum of an array using recursion
let arr = [1, 2, 3, 4, 5, 6];

function sum(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sum(arr, index + 1);
}
console.log(sum(arr));

////////////////////////////////////

// even numbers sum using recursion

function evensum(arr, index = 0) {
    if (index === arr.length) return 0;
    if (arr[index] % 2 === 0) {
        return arr[index] + evensum(arr, index + 1);
    }
    return evensum(arr, index + 1);
}
console.log(evensum(arr));
