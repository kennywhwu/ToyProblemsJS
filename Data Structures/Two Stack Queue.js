var Stack = require('./Stack');

var Queue = function() {
  this._incoming = new Stack();
  this._outgoing = new Stack();
};

Queue.prototype.enqueue = function(val) {
  this._incoming.push(val);
};

Queue.prototype.transferStacks = function() {
  while(this._incoming.size() > 0) {
    this._outgoing.push(this._incoming.pop());
  }
}

Queue.prototype.dequeue = function() {
  if (this._outgoing.size() === 0) {
    this.transferStacks();
  }
  return this._outgoing.pop();
};

/*
var q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q)
console.log(q.dequeue()) // 1
console.log(q.dequeue()) // 2
console.log(q.dequeue()) // 3
console.log(q.dequeue()) // 4
q.enqueue(15) 
console.log(q.dequeue()) // 5
console.log(q.dequeue()) // 15
console.log(q) // {}
*/