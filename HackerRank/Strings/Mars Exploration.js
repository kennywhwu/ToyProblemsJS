// https://www.hackerrank.com/challenges/mars-exploration

const findChanges = (s) => {
  let i = 2,
    len = s.length,
    count = 0;

  for (i; i < len; i += 3) {
    if (s[i] !== 'S') count++;
    if (s[i - 1] !== 'O') count++;
    if (s[i - 2] !== 'S') count++;
  }

  console.log(count);
}

function main() {
  var S = readLine();
  findChanges(S);
}
