// https://www.hackerrank.com/challenges/missing-numbers

function findMissing(missingNums, allNums) {
  let map = {},
    result = '';

  allNums.forEach(num => {
    map[num] = map[num] ? map[num] + 1 : 1;
  });

  missingNums.forEach(num => {
    map[num] -= 1;
  });

  for (let num in map) {
    if (map[num] > 0) {
      result += (num + ' ');
    }
  }

  console.log(result);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

_input = '';

process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  arr = _input.split('\n');
  findMissing(arr[1].split(' '), arr[3].split(' '));
});
