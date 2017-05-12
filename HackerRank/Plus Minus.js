// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Input Format

// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers describing an array of numbers .

// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeroes in the array compared to its size.
// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array. 
// The respective fractions of positive numbers, negative numbers and zeroes are 3/6, 2/6 and , 1/6 respectively.

const calc = (numbers) => {
  let pos = 0,
    neg = 0,
    zeroes = 0;
  let len = numbers.length;

  for (let num of numbers) {
    if (num > 0) pos++;
    if (num < 0) neg++;
    if (num === 0) zeroes++;
  }
  return `${(pos/len).toFixed(6)}
            ${(neg/len).toFixed(6)}
            ${(zeroes/len).toFixed(6)}`;
}
