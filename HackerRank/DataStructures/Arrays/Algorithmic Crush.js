const parseTheStrings = (s) => {
  return s.split(' ').map(Number);
}

function processData(abk) {
  let [n, m] = abk[input_index++];
  console.log(getMax(n, m, abk));
}

function getMax(n, m, abk) {
  let list = [],
    max = 0,
    runningSum = 0,
    i;

  while (m-- > 0) {
    let [a, b, k] = abk[input_index++];
    // array zero indexed, input is 1 indexed
    // instead of updating all values, store difference between a & b
    list[a - 1] = list[a - 1] || 0;
    list[b] = list[b] || 0;
    list[a - 1] += k;
    list[b] -= k;
  }

  for (i = 0; i < list.length; i++) {
    runningSum += (isNaN(list[i]) ? 0 : list[i]);
    max = Math.max(runningSum, max);
  }

  return max;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

// declare global vars for stdin inputs
_input = "";
input_index = 0;

process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  _input = _input.split('\n').map(parseTheStrings);
  processData(_input);
});
