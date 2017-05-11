/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let num = nums[i];
    if (map[num] || map[num] === 0) {
      return [map[num], i];
    } else {
      map[target - num] = i;
    }
  }
};
