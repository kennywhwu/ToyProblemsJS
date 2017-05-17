//--------------------------------SETUP---------------------------------------//

/*
given an array of nodes find the root
*/

class node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
};

//--------------------------------FUNCTIONS---------------------------------------//

// o(2n) time
const findRoot = (arr) => {
  let nodeMap = {};

  for (let node of arr) {
    if (node.left) nodeMap[node.left.val] = node.left;
    if (node.right) nodeMap[node.right.val] = node.right;
  }

  for (let node of arr) {
    if (!nodeMap[node.val]) {
      return node;
    }

    if (nodeMap[node.val] && nodeMap[node.val] !== node) {
      return node;
    }
  }
}

//--------------------------------TESTS---------------------------------------//

  //     4
  //    /\
  //   2  5
  //   /\
  //  1  3
  // */

let four = new node(4);
let two = new node(2);
let five = new node(5);
let one = new node(1);
let three = new node(3);

four.left = two;
four.right = five;
four.left.left = one;
four.left.right = three;

let nodeArr = [two, five, four, one, three];

assert('one test', four, findRoot(nodeArr));