// https://www.hackerrank.com/challenges/camelcase

function main() {
  let wordCount = 1,
    s = readLine();
  for (let char of s) {
    if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
      wordCount++;
    }
  }

  console.log(wordCount);
}
