// https://www.hackerrank.com/challenges/funny-string

function funnify(input) {
  for (let i = 1; i < input.length; i++) {
    if (isItFunny(input[i])) {
      console.log('Funny');
    } else {
      console.log('Not Funny');
    }
  }
}

function isItFunny(s) {
  for (let i = 1, j = s.length - 1; i < s.length; i++, j--) {
    let sI = Math.abs(s[i].charCodeAt() - s[i - 1].charCodeAt());
    let rI = Math.abs(s[j].charCodeAt() - s[j - 1].charCodeAt());
    if (sI !== rI) {
      return false;
    }
  }
  return true;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

_input = "";
input_array = '';

process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  input_array = _input.split('\n');
  funnify(input_array);
});
