// https://www.hackerrank.com/challenges/insertionsort2

function processData(input) {
    let arr = input.split('\n')[1].split(' ');
    insertionSort(arr);
}

const strToInt = strings => {
  return strings.reduce((ints, str) => {
    ints.push(parseInt(str));
    return ints;
  }, []);
}

const insertionSort = (arr) => {
  arr = strToInt(arr);

  for (let i = 1; i < arr.length; i++) {
    let val = arr[i],
        hole = i;

    while (hole > 0 && val < arr[hole - 1]) {
      arr[hole] = arr[hole - 1];
      hole -= 1;
    }

    arr[hole] = val;
    console.log(arr.join(' '));
  }
  return arr;
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});