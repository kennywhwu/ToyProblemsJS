// write a function using recursion that takes an array and returns an array that is the reversed version
// ex [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]

const reverseArray = (arr, reversed = [], i = arr.length-1) => {
  if (i < 0) {
    return reversed;
  }
  reversed.push(arr[i]);
  return reverseArray(arr, reversed, i-1);
};

console.log(reverseArray([1, 2, 3, 4, 5]))
