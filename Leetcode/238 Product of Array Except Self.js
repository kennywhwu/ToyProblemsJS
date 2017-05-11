/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums, i, right = 1, result = [1]) {
  // set res[i] to result of product of all nums to left of res[i]
  for (i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // now take res[i] and set to product of res[i] and right product
  for (i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
}



