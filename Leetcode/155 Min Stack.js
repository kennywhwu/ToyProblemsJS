/**
 * initialize your data structure here.
 */
 
var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(val) {
  this._storage[this._size++] = val;
  return this._size;
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

Stack.prototype.top = function() {
    return this._storage[this._size-1];
}






var MinStack = function() {
    this._stack = new Stack();
    this._min = new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._stack.push(x);
    if (!this._min.size() || this.getMin() >= x) {
        this._min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.getMin() === this._stack.top()) {
        this._min.pop();
    }
    return this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack.top();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._min.top();
};