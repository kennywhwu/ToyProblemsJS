// Find maximum depth of nested arrays
// ex => [8, [7], [[6, [4], 6], 4], 5] === 4

const findMaxDepth = array => {
  let depth = 1;
  let max = 1

  array.forEach(item => {
    if (Array.isArray(item)) {
      depth = findMaxDepth(item) + 1;
    }

    max = Math.max(max, depth);
  });

  return max;
};


const x = [8, [7], [[6, [4], 6], 4], 5];
const y = [[[[[[]]]]]];
console.log(findMaxDepth(x));
console.log(findMaxDepth(y));