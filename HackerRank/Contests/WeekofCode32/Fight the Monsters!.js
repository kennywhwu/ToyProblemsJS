// https://www.hackerrank.com/contests/w32/challenges/fight-the-monsters

function getMaxMonsters(n, hit, t, h) {
  h = h.sort((a, b) => a - b);
  let currMonster = 0;

  while (t > 0) {
    h[currMonster] -= hit;

    if (h[currMonster] <= 0) {
      currMonster++;
    }

    t--;
  }

  return currMonster;
}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var hit = parseInt(n_temp[1]);
  var t = parseInt(n_temp[2]);
  h = readLine().split(' ');
  h = h.map(Number);
  var result = getMaxMonsters(n, hit, t, h);
  process.stdout.write("" + result + "\n");

}