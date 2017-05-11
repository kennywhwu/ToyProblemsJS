/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
  var nextNum;
  var results = [];
  
  if (numRows === 0) {
      return [];
  }

  for (var i = 0; i < numRows; i++) {
    var innerArr = [];
    for (var j = 0; j <= i; j++) {
        if (j === 0 || j === results[i - 1].length) {
        nextNum = 1;
        } else {
        nextNum = (results[i - 1][j - 1] + results[i - 1][j])
      }
      innerArr.push(nextNum);
    }
    results.push(innerArr);
  }
  return results;
};