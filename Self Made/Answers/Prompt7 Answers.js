// write a function using recursion that takes an array and returns an array that is the reversed version
// ex [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]

const reverseArray = (arr, reversed = []) => {
  if (!arr.length) {
    return reversed;
  }
  reversed.push(arr.pop());
  return reverseArray(arr, reversed);
};

console.log(reverseArray([1, 2, 3, 4, 5]))
