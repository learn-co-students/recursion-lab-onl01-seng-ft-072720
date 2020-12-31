// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(s) {
  if (s.length < 2) {
    return s;
  } else {
    return reverseString(s.substring(1)) + s[0];
  }
}

function isPalindrome(string) {
  let l = string.length;
  if (l < 2) {
    return true;
  } else if (string[l - 1] === string[0]) {
    return isPalindrome(string.substring(1, l - 1));
  } else {
    return false;
  }
}

function addUpTo(arr, index) {
  return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false;
  } else if (arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num);
  }
}
