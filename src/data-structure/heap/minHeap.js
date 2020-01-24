const Heap = require('./heap')

class MinHeap extends Heap {
  isPairInCorrectOrder(a, b) {
    return this.comparator.lessThanOrEqual(a, b)
  }

  static fromArray(arr, compareFunc = undefined) {
    const heap = new MinHeap(compareFunc)
    return super.fromArray(arr, heap)
  }
}

module.exports = MinHeap
