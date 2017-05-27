var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(val) {
  return this._storage[this._size++] = val;
};

Stack.prototype.pop = function() {
  let temp = this._storage[--this._size];
  delete this._storage[this._size];

  if (this._size < 0) {
    this._size = 0;
  }

  return temp;
};

Stack.prototype.size = function() {
  return this._size;
};

Stack.prototype.contains = function(val) {
  for (let key in this._storage) {
    if (this._storage[key] === val) {
      return true;
    }
  }
  return false;
};


var s = new Stack();

s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
console.log(s.contains(1)) // true
console.log(s.contains(6)) // false
console.log(s.pop()) // 5
console.log(s.contains(5)) // false