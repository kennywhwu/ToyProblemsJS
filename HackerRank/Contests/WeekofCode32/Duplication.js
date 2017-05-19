// https://www.hackerrank.com/contests/w32/challenges/duplication

const createString = (s) => {
  s = s.split('');
  let t = [],
    i = 0,
    len = s.length;

  for (i; i < len; i++) {
    t[i] = 1 - s[i];
  }

  s = s.concat(t).join('')
  return s.length > 1000 ? s : createString(s);
}

function duplication(x, string) {
  return string[x];
}

function main() {
  var q = parseInt(readLine());
  let string = createString('0');
  console.log(string);
  for (var a0 = 0; a0 < q; a0++) {
    var x = parseInt(readLine());
    var result = duplication(x, string);
    process.stdout.write("" + result + "\n");
  }

}
let string = createString('0');
  console.log(string);