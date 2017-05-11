/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
   this.min = new BinaryHeap();
   this.max = new BinaryHeap(true);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let maxRoot = this.max.getRoot();
  let minRoot = this.min.getRoot();

  if (num <= minRoot) {
    this.max.insert(num);
  } else {
    this.min.insert(num);
  }

  let sizeDiff = this.min.findSize() - this.max.findSize();
  if (sizeDiff > 1) {
    let minVal = this.min.removeRoot();
    this.max.insert(minVal);
  } else if (sizeDiff < 0) {
    let maxVal = this.max.removeRoot();
    this.min.insert(maxVal);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let maxSize = this.max.findSize();
  let minSize = this.min.findSize();
  if (minSize > maxSize) {
    return this.min.getRoot();
  } else {
    return (this.max.getRoot() + this.min.getRoot()) / 2;
  }
};


var BinaryHeap = function(max) {
  this.max = max || false;
  this.size = 0;
  this._heap = [];
  this._compare = function(i, j) { 
    return this.max ? i > j : i < j;
  };
}

BinaryHeap.prototype.getRoot = function() {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function(value) {
  this._heap.push(value);
  this.sortUp(this._heap.length - 1, value);
  this.size++;
}

BinaryHeap.prototype.sortUp = function(newIndex, newData) {
  if (newIndex > 0) {
    let pIndex = this.getParentIndex(newIndex);
    let pData = this._heap[pIndex];

    if (this._compare(newData, pData)) {
      this._heap[pIndex] = newData;
      this._heap[newIndex] = pData;
      this.sortUp(pIndex, newData);
    }
  }
}

BinaryHeap.prototype.getParentIndex = function(newIndex) {
  return Math.floor((newIndex - 1) / 2);
};

BinaryHeap.prototype.removeRoot = function() {
  let removed = this._heap[0];
  this._heap[0] = this._heap.pop();
  this.sortDown(0, this._heap[0]);
  this.size--;
  return removed;
}

BinaryHeap.prototype.sortDown = function(pIndex, pData) {
  if (pIndex < this._heap.length) {
    let targetIndex = pIndex;
    let targetData = pData;

    // get left child data
    let leftChildIndex = this.getLeftChild(pIndex);
    let leftChildData = this._heap[leftChildIndex];

    // get right child data
    let rightChildIndex = this.getRightChild(pIndex);
    let rightChildData = this._heap[rightChildIndex];

    // left child less than parent? swap
    if (leftChildIndex < this._heap.length && this._compare(leftChildData, targetData)) {
      targetIndex = leftChildIndex;
      targetData = leftChildData;
    }

    // right child less than parent? swap
    if (rightChildIndex < this._heap.length && this._compare(rightChildData, targetData)) {
      targetIndex = rightChildIndex;
      targetData = rightChildData;
    }

    if (targetIndex !== pIndex) {
      this._heap[pIndex] = targetData;
      this._heap[targetIndex] = pData;
      this.sortDown(targetIndex, pData);
    }
  }
}

BinaryHeap.prototype.getLeftChild = function(pIndex) {
  return pIndex * 2 + 1;
};

BinaryHeap.prototype.getRightChild = function(pIndex) {
  return pIndex * 2 + 2;
};

BinaryHeap.prototype.findSize = function() {
  return this.size;
}


/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */