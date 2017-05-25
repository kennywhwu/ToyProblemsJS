function mostBirds(birds) {
  let map = {},
    max = [0, 0];

  birds.forEach(bird => {
    map[bird] = map[bird] ? map[bird] + 1 : 1;
  });

  for (let bird in map) {
    if (max[1] < map[bird]) {
      max = [bird, map[bird]];
    }
  }

  console.log(max[0]);
}

function main() {
  var n = parseInt(readLine());
  types = readLine().split(' ');
  types = types.map(Number);
  mostBirds(types);
}
