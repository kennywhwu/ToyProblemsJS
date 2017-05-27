var Stack = require('./Stack');

var MinStack = function() {
    this._stack = new Stack();
    this._min = new Stack();
};

MinStack.prototype.push = function(x) {
    this._stack.push(x);
    if (!this._min.size() || this.getMin() >= x) {
        this._min.push(x);
    }
};

MinStack.prototype.pop = function() {
    if (this.getMin() === this._stack.top()) {
        this._min.pop();
    }
    return this._stack.pop();
};

MinStack.prototype.top = function() {
    return this._stack.top();
};

MinStack.prototype.getMin = function() {
    return this._min.top();
};


/*
@ Tests
var ms = new MinStack();
console.log(ms)
ms.push(1)
ms.push(2)
ms.push(3)
ms.push(4)
ms.push(0)
console.log(ms.getMin()) //=> 0
ms.pop();
console.log(ms.getMin()) //=> 1
*/
