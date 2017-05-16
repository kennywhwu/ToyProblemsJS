/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
  let result = 0,
    adder = 1;

  while (num) {
    if (!(num & 1)) result += adder;

    // bitshift
    num >>= 1;
    adder <<= 1;
  }

  return result;
};