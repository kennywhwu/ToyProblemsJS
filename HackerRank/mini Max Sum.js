// https://www.hackerrank.com/challenges/mini-max-sum


// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.


const findMinMax = numbers => {
  let min = Infinity,
    max = numbers[0],
    skip = 0,
    len = numbers.length;

  while (skip < len) {
    let sum = 0;
    for (let i = 0; i < len; i++) {
      if (i !== skip) sum += numbers[i];
    }
    max = Math.max(max, sum);
    min = Math.min(min, sum);
    skip++;
  }

  return min + ' ' + max;
}
