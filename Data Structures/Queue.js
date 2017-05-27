var Queue = function() {
  this._storage = {};
  this._newest = this._oldest = 0;
};

Queue.prototype.enqueue = function(val) {
  this._storage[this._newest++] = val;
};

// indices will get large as things get dequeued, TODO: reset to 0 somehow
Queue.prototype.dequeue = function() {
  let removed;

  if (this._newest !== this._oldest) {
    removed = this._storage[this._oldest];
    delete this._storage[this._oldest++];
  }

  return removed;
};

Queue.prototype.size = function() {
  return this._size;
}

var q = new Queue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q.dequeue()) // 1
console.log(q.dequeue()) // 2
console.log(q.dequeue()) // 3
console.log(q.dequeue()) // 4
console.log(q.dequeue()) // 5
console.log(q.dequeue()) // undefined
console.log(q) // {}