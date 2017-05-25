// https://www.hackerrank.com/challenges/sherlock-and-array

function solve(a) {
  let leftIdx = 0,
    rightIdx = a.length - 1,
    leftSum = a[leftIdx],
    rightSum = a[rightIdx];

  while (leftIdx !== rightIdx) {
    if (leftSum < rightSum) {
      leftSum += a[++leftIdx];
    } else {
      rightSum += a[--rightIdx];
    }
  }

  return leftSum === rightSum ? 'YES' : 'NO';
}

function main() {
  var T = parseInt(readLine());
  for (var a0 = 0; a0 < T; a0++) {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = solve(a);
    process.stdout.write("" + result + "\n");
  }

}
