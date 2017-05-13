// https://www.hackerrank.com/challenges/insertionsort1

function processData(input) {
    let arr = input.split('\n')[1].split(' ');
    console.log(insertionSort(arr).join(' '));
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
      console.log(arr.join(' '));
      hole -= 1;
    }

    arr[hole] = val;
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