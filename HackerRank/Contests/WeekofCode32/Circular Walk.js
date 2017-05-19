// https://www.hackerrank.com/contests/w32/challenges/circular-walk

const calculateJumpDistances = (g, seed, p, n, r_0) => {
  let jumps = [r_0],
    spot = 1;

  while (spot < n) {
    jumps[spot] = ((jumps[spot - 1] * g) + seed) % p;
    spot++;
  }

  return jumps;
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
      this.nodes[node] = this.nodes[node] || { edges: {} };
  }

  contains(node) {
    return !!this.nodes[node];
  }

  addEdge(fromNode, toNode) {
    if (!this.contains(fromNode) || !this.contains(toNode)) {
      return;
    }
    this.nodes[fromNode].edges[toNode] = toNode;
  }
}

const makeGraph = (jumpMap, n) => {
  let graph = new Graph();

  for (let i = 0; i < n; i++) {
    graph.addNode(i);
  }

  for (let i = 0; i < jumpMap.length; i++) {
    let dist = jumpMap[i];

    while (dist > 0) {
      let left = i + dist,
        right = i - dist;

      if (left >= n) left -= n;
      if (right < 0) right += n;

      graph.addEdge(i, left);
      graph.addEdge(i, right);
      dist--;
    }
  }
    
  return graph;
}

const genPath = (path, tNode) => {
  let result = [tNode];

  while (path[tNode] !== null) {
    tNode = path[tNode];
    result.push(tNode);
  }

  return result.length - 1;
}


const bfs = (conn, s, t) => {
  let path = [null],
    queue = [s],
    visited = [true],
    nodes = conn.nodes,
    current;

  while (queue.length) {
    current = queue.shift();
    if (current === t) {
      return genPath(path, t);
    }
      
    for (let i = 0; i < nodes.length; i++) {
      if (i !== current && nodes[current].edges[i] && !visited[i]) {
        path[i] = current;
        visited[i] = true;
        queue.push(i);
      }
    }
  }

  return -1;
}



const circularWalk = (n, s, t, r_0, g, seed, p) => {
  const jumpMap = calculateJumpDistances(g, seed, p, n, r_0);
  let connections = makeGraph(jumpMap, n);
  return bfs(connections, s, t);
}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var s = parseInt(n_temp[1]);
  var t = parseInt(n_temp[2]);
  var r_0_temp = readLine().split(' ');
  var r_0 = parseInt(r_0_temp[0]);
  var g = parseInt(r_0_temp[1]);
  var seed = parseInt(r_0_temp[2]);
  var p = parseInt(r_0_temp[3]);
  var result = circularWalk(n, s, t, r_0, g, seed, p);
  process.stdout.write("" + result + "\n");

}