// https://www.hackerrank.com/challenges/quicksort1

function processData(arr) {
    let left = [],
        equal = arr[0],
        right = [],
        len = arr.length;
    
    for (let i = 1; i < len; i++) {
        if (arr[i] <= equal) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    left.push(equal);
    console.log(left.concat(right).join(' '));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    let arr = _input.split('\n')[1].split(' ').map(n => parseInt(n));
   processData(arr);
});