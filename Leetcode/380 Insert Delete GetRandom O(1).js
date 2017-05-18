/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.values = [];
  this.positions = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (!this.has(val)) {
    this.values.push(val);
    this.positions[val] = this.values.length - 1;
    return true;
  }
  return false;
};

RandomizedSet.prototype.has = function(val) {
  if (this.positions[val] >= 0) {
    return true;
  }
  return false;
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.has(val)) {
    let idx = this.positions[val],
      lastIdx = this.values.length - 1;

    this.swapAndPop(idx, lastIdx, this.values);
    return true;
  }
  return false;
};

RandomizedSet.prototype.swapAndPop = function(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  this.positions[arr[i]] = i;
  arr.pop();
  delete this.positions[temp];
  return arr;
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let rand = Math.floor(Math.random() * this.values.length);
  return this.values[rand];
};


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */