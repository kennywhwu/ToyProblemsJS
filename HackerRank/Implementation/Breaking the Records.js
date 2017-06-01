// https://www.hackerrank.com/challenges/breaking-best-and-worst-records

function getRecord(s) {
  let result = [0, 0],
    high = s[0],
    low = s[0];

  for (let i = 0; i < s.length; i++) {
    if (high < s[i]) {
      high = s[i];
      result[0]++;
    }
    if (low > s[i]) {
      low = s[i];
      result[1]++;
    }
  }

  return result;
}

function main() {
  var n = parseInt(readLine());
  s = readLine().split(' ');
  s = s.map(Number);
  var result = getRecord(s);
  console.log(result.join(" "));

}
