// https://www.hackerrank.com/challenges/array-left-rotation

function shift(arr, n, d) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result[(i + n - d) % n] = arr[i];
  }

  console.log(result.join(' '));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  let input = _input.split('\n'),
    nd = input[0].split(' ');
  n = parseInt(nd[0]),
    d = parseInt(nd[1]),
    arr = input[1].split(' ');

  shift(arr, n, d);
});
