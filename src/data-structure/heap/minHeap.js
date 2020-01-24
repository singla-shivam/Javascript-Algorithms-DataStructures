const Heap = require('./heap')

class MinHeap extends Heap {
  isPairInCorrectOrder(a, b) {
    return this.comparator.lessThanOrEqual(a, b)
  }

  static fromArray(arr, compareFunc = undefined, classs = undefined) {
    return super.fromArray(arr, classs || new MinHeap(compareFunc))
  }
}

module.exports = MinHeap
