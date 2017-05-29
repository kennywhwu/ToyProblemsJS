// https://leetcode.com/problems/longest-harmonious-subsequence/

var findLHS = function(nums) {
    let map = {},
        result = 0,
        i;
        
    for (i = 0; i < nums.length; i++) {
        let num = nums[i]
        map[num] = map[num] + 1 || 1;
    }
    
    for (i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num + 1]) {
            result = Math.max(result, map[num] + map[num + 1]);
        }
    }
    
    return result;
};