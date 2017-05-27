// write a function that takes two arguments (arr, num) and returns an array whose values are multiplied by num, do this using recursion
// ex ([1, 2, 3, 4, 5] num = 4) => [4, 8, 12, 16, 20]

const recursiveMultiplier = (arr, num, n = 0) => {
  if (n === arr.length) {
    return arr;
  }
  arr[n] *= num;
  return recursiveMultiplier(arr, num, n+1);
};

console.log(recursiveMultiplier([1, 2, 3, 4, 5], 4));

